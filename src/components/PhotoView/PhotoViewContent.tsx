import * as React from 'react';
import {memo, useCallback, useEffect, useRef, useState} from 'react';
import {Dimensions, Image, Platform, ScrollView, TouchableOpacity} from 'react-native';
import styled from 'styled-components/native';
import PhotoView from 'react-native-photo-view';
import {getBottomSpace, getStatusBarHeight} from "react-native-iphone-x-helper";
import useBoolean from "@/hooks/useBoolean";
import {IC_CLOSE} from "@/assets";

const SWrapper = styled.View`
  background-color: #000;
  flex: 1;
  padding-top: ${() => Platform.OS === 'ios' ? getStatusBarHeight(true) : 0}px;
  padding-bottom: ${() => getBottomSpace()}px;
`;

const SSingleImageWrapper = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: #000;
  width: ${() => Dimensions.get('window').width}px;
`;

const SImage = styled(PhotoView)`
  flex: 1 1;
  width: 100%;
  max-width: ${() => Dimensions.get('window').width}px;
`;

const SLoadingIndicator = styled.ActivityIndicator`
  margin: auto;
  width: 30px;
  height: 30px;
`;

const SHeader = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 8px 16px;
  /* position: absolute;
  top: ${() => Platform.OS === 'ios' ? getStatusBarHeight(true) : 0}px; */
  left: 0;
  width: 100%;
  z-index: 1;
  background-color: #00000080;
`;


const SCloseButton = styled(Image)`
  height: 32px;
  line-height: 32px;
  text-align: center;
  width: 32px;
  font-size: 24px;
  z-index: 2;
  color: #fff; 
`;


const PhotoViewSingleImage = memo(({image}: { image: string }) => {
    const [loading, , setLoadingFalse] = useBoolean(true);

    return <SSingleImageWrapper>
        <SImage
            source={{uri: image}}
            minimumZoomScale={1}
            maximumZoomScale={3}
            androidScaleType="fitCenter"
            onLoadEnd={setLoadingFalse}
        />

        {loading && <SLoadingIndicator/>}
    </SSingleImageWrapper>
});

interface Props {
    images: string[],
    initialIndex?: number,
    onCloseRequest: () => any
}

const getPrevNext = (_len: number, _index: number) => {
    if (_len === 0 || _len === 1) {
        return [_index]
    }
    if (_index >= 1) {
        if (_index < _len) {
            return [_index - 1, _index, _index + 1]
        }
        return [_index - 1, _index]
    }
    return _index < _len ? [_index, _index + 1] : [_index]
};
const PhotoViewContent = memo(({initialIndex = 0, images, onCloseRequest}: Props) => {
    const currentPage = useRef(initialIndex);
    const scrollView = useRef<ScrollView>(null);
    const [renderedPages, setRenderedPages] = useState<Set<number>>(() => new Set(getPrevNext(images.length, initialIndex)));

    useEffect(() => {
        if (!initialIndex && scrollView.current) return;
        const dimensions = Dimensions.get('window');

        let timeout = setTimeout(() => {
            // @ts-ignore
            scrollView.current.scrollTo({
                x: dimensions.width * initialIndex,
                y: 0,
                animated: false
            });
        });

        return () => {
            return clearTimeout(timeout);
        }
    }, [scrollView, initialIndex]);

    const onScrollEnd: ScrollView['props']['onMomentumScrollEnd'] = useCallback(event => {
        const {contentOffset, layoutMeasurement} = event.nativeEvent;

        const pageNum = Math.floor(contentOffset.x / layoutMeasurement.width);

        currentPage.current = pageNum;

        setRenderedPages(renderedPages => {
            const newState = new Set<number>(renderedPages);
            newState.add(pageNum);
            if (pageNum + 1 <= images.length) {
                newState.add(pageNum + 1);
            }
            if (pageNum - 1 >= 0) {
                newState.add(pageNum - 1)
            }
            return newState;
        });
    }, [images]);

    return <SWrapper>
        <SHeader>
            <TouchableOpacity onPress={onCloseRequest}><SCloseButton source={IC_CLOSE}/></TouchableOpacity>
        </SHeader>
        <ScrollView
            ref={scrollView}
            pagingEnabled={true}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            onMomentumScrollEnd={onScrollEnd}
        >
            {images.map((image, index) =>
                renderedPages.has(index)
                    ? <PhotoViewSingleImage key={image} image={image}/>
                    : <SSingleImageWrapper key={image}/>
            )}
        </ScrollView>
    </SWrapper>
});

PhotoViewContent.displayName = 'PhotoViewContent';

export default PhotoViewContent;
