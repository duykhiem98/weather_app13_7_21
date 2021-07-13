import React, {memo, useCallback, useMemo, useState} from 'react';
import {
    Dimensions,
    Linking,
    StyleSheet,
    TextStyle,
    TouchableHighlight,
    View,
    ViewStyle,
} from 'react-native';
// @ts-ignore
import HTML from 'react-native-render-html';
// @ts-ignore
import {alterNode, IGNORED_TAGS, makeTableRenderer} from 'react-native-render-html-table-bridge';
import {WebView} from 'react-native-webview';
import FastImage from 'react-native-fast-image';
import styled from 'styled-components/native';
// @ts-ignore
import linkifyHtml from 'linkifyjs/html';
// @ts-ignore
import {_constructStyles} from 'react-native-render-html/src/HTMLStyles';
import {Colors} from "@/themes/Colors";
import {Gray1Text} from "@/components/index";
import useBoolean from "@/hooks/useBoolean";
import PhotoViewModal from "@/components/PhotoView/PhotoViewModal";


const urlRegex = /\bhttps?:\/\/[a-z0-9\.\-_](:\d+)?[^ \n\t<>()\[\]]*/i;

const linkifyOptions = {
    validate: {
        url: function (value: string) {
            return urlRegex.test(value);
        },
        email: false,
    },
    ignoreTags: ['a', 'script', 'style'],
};

const config = {
    WebViewComponent: WebView,
};

const makeUlOl = (
    htmlAttribs: any,
    children: any,
    convertedCSSStyles: any,
    passProps: any = {},
) => {
    const style = _constructStyles({
        tagName: 'ul',
        htmlAttribs,
        passProps,
        styleSet: 'VIEW',
    });
    const {
        allowFontScaling,
        rawChildren,
        nodeIndex,
        key,
        baseFontStyle,
        listsPrefixesRenderers,
    } = passProps;
    const baseFontSize = baseFontStyle.fontSize || 14;
    const pointStyle = {
        marginRight: 10,
        width: baseFontSize / 2.8,
        height: baseFontSize / 2.8,
        marginTop: baseFontSize / 2,
        borderRadius: baseFontSize / 2.8,
        backgroundColor: Colors.gray1
    };
    const numberLi = {marginRight: 5, fontSize: baseFontSize};

    children =
        children &&
        children.map((child: any, index: number) => {
            const rawChild = rawChildren && rawChildren.length ? rawChildren[index] : null;
            let prefix = false;
            const rendererArgs = [
                htmlAttribs,
                children,
                convertedCSSStyles,
                {
                    ...passProps,
                    index,
                },
            ];

            if (rawChild) {
                if (rawChild.parentTag === 'ul' && rawChild.tagName === 'li') {
                    prefix =
                        listsPrefixesRenderers && listsPrefixesRenderers.ul ? (
                            listsPrefixesRenderers.ul(...rendererArgs)
                        ) : (
                            <View style={pointStyle}/>
                        );
                } else if (rawChild.parentTag === 'ol' && rawChild.tagName === 'li') {
                    prefix =
                        listsPrefixesRenderers && listsPrefixesRenderers.ol ? (
                            listsPrefixesRenderers.ol(...rendererArgs)
                        ) : (
                            <Gray1Text
                                allowFontScaling={allowFontScaling}
                                style={numberLi}>
                                {index + 1})
                            </Gray1Text>
                        );
                }
            }
            return (
                <View
                    key={`list-${nodeIndex}-${index}-${key}`}
                    style={styles.parentView}>
                    {prefix}
                    <View style={styles.flex1}>{child}</View>
                </View>
            );
        });
    return (
        <View style={[...style, {marginBottom: 0}]} key={key}>
            {children}
        </View>
    );
};

const renderers = (props: any) => ({
    table: makeTableRenderer(config),
    ol: makeUlOl,
    ul: makeUlOl,
    img: (htmlAttribs: any) => {
        const {src} = htmlAttribs;
        return (
            <TouchableHighlight
                style={{backgroundColor: '#000', marginVertical: 6, borderRadius: 4}}
                onPress={() => props.onImagePress && props.onImagePress(src)}>
                <FastImage
                    style={styles.img}
                    source={{uri: src}}
                    resizeMode={FastImage.resizeMode.contain}
                />
            </TouchableHighlight>
        );
    },
    lazyimagewrapper: (htmlAttribs: any) => {
        const {src} = htmlAttribs;

        return (
            <TouchableHighlight
                style={{backgroundColor: '#000', marginVertical: 4, borderRadius: 4}}
                onPress={() => props.onImagePress && props.onImagePress(src)}>
                <FastImage
                    style={styles.img}
                    source={{uri: src}}
                    resizeMode={FastImage.resizeMode.contain}
                />
            </TouchableHighlight>
        );
    },

});

const SHTML = styled(HTML).attrs((props) => ({
    alterNode,
    renderers: renderers(props),
    ignoredTags: [...IGNORED_TAGS],
    imagesMaxWidth: Dimensions.get('window').width - 16 * 2,
    baseFontStyle: {
        fontSize: 15,
        lineHeight: 22,
        color: Colors.gray1,
    },
    tagsStyles: {
        a: {
            color: Colors.blue1,
        },
        div: {
            color: Colors.gray1,
        },
        ul: {
            color: Colors.gray1,
        },
        li: {
            color: Colors.gray1,
        },
        p: {
            margin: 0,
        },
        strong: {
            fontWeight: 'bold'
        },
        b: {
            fontWeight: 'bold'
        },
        h1: {
            margin: 0,
            fontSize: 25,
            lineHeight: 31,
        },
        h2: {
            margin: 0,
            fontSize: 22,
            lineHeight: 28,
        },
        h3: {
            margin: 0,
            fontSize: 20,
            lineHeight: 25,
        },
        h4: {
            margin: 0,
            fontSize: 18,
            lineHeight: 23,
        },
        h5: {
            margin: 0,
            fontSize: 16,
            lineHeight: 20,
        },
        h6: {
            margin: 0,
            fontSize: 14,
            lineHeight: 18,
        },
    },
}))`
  padding-bottom: 0;
`;

interface Props {
    htmlContent: string;
    containerStyle?: ViewStyle;
    baseFont?: TextStyle;
}

const regex = new RegExp('<img .*?src="(.*?)">', 'gi');

export const HTMLRenderer = memo(
    ({htmlContent, containerStyle, baseFont}: Props) => {
        const [visibleImage, showVisibleImage, hideVisibleImage] = useBoolean(
            false,
        );

        const images = useMemo(() => {
            const result = htmlContent.match(regex);
            return result
                ? result.map((_r) => {
                    const _regex = new RegExp('<img .*?src="(.*?)"', 'gi');
                    const _result = _regex.exec(_r);
                    return _result && _result.length ? _result[1] || '' : '';
                })
                : [];
        }, [htmlContent]);

        const [href, setHref] = useState('');

        const onLinkPress = useCallback((evt, href) => {
            Linking.openURL(href);
        }, []);

        const onImagePress = useCallback(
            (_href) => {
                setHref(_href);
                showVisibleImage();
            },
            [href, visibleImage],
        );

        const htmlContentStr = useMemo(
            //@ts-ignore
            () => (htmlContent ? linkifyHtml(htmlContent, linkifyOptions) : ''),
            [htmlContent],
        );

        const indexImage = useMemo(() => {
            const _index = images.indexOf(href);
            return _index > -1 ? _index : 0;
        }, [images, href]);

        return (
            <>
                <SHTML
                    onLinkPress={onLinkPress}
                    onImagePress={onImagePress}
                    containerStyle={[styles.container, containerStyle]}
                    html={`<div>${htmlContentStr}</div>`}
                    baseFontStyle={baseFont ? baseFont : {}}
                />
                <PhotoViewModal
                    isVisible={visibleImage}
                    onCloseRequest={hideVisibleImage}
                    images={images}
                    initialIndex={indexImage}
                />
            </>
        );
    },
);

// @ts-ignore
const styles = StyleSheet.create({
    container: {
        paddingBottom: 0,
        marginBottom: -20,
    },
    baseFont: {
        fontSize: 15,
        lineHeight: 22,
    },
    img: {
        width: '100%',
        minHeight: 250,
    },
    parentView: {flexDirection: 'row', marginBottom: 10},
    flex1: {flex: 1},
    optionContainer: {
        paddingHorizontal: 0,
    },
});
