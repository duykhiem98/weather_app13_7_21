import React, {memo, useCallback, useState} from 'react';
import {Text, View, Image, TouchableOpacity, StyleSheet, ViewStyle} from 'react-native';
import useBoolean from "@/hooks/useBoolean";
import PhotoViewModal from "@/components/PhotoView/PhotoViewModal";

interface ImageItemProps {
    image: string,
    index: number,
    onPress?: (url: string, index: number) => void
}

const ImageItem = (props: ImageItemProps) => {
    const {image, index, onPress} = props;

    const onImagePress = useCallback(() => {
        if (onPress) {
            onPress(image, index)
        }
        return
    }, [image, index, onPress]);

    return props.image ? (
        <TouchableOpacity
            style={[
                styles.image_view,
                {margin: 3}
            ]}
            onPress={onImagePress}>
            <Image
                style={styles.image}
                resizeMode="cover"
                source={{
                    uri: props.image,
                }}
            />
        </TouchableOpacity>
    ) : (
        <View/>
    );
};

interface TwoImagesProps {
    images: string[],
    onPress?: (image: string, index: number) => void
}

const TwoImages = (props: TwoImagesProps) => {
    const {images, onPress} = props;

    return (
        <>
            <ImageItem image={images[0]} onPress={onPress} index={0}/>
            <ImageItem image={images[1]} onPress={onPress} index={0}/>
        </>
    );
};

//overflow show "+ number"
const renderImages = (start: number, overflow: boolean, images: string[], onPress?: (image: string, index: number) => void) => {
    return (
        <>
            <ImageItem image={images[start]} onPress={onPress} index={start}/>
                {images[start + 1] && (
                    <View style={styles.image_view}>
                        <ImageItem
                            image={images[start + 1]}
                            onPress={onPress}
                            index={start + 1}
                        />
                        {overflow && (
                            <TouchableOpacity
                                onPress={() => onPress && onPress(images[start + 1], start + 1)}
                                style={styles.item_view_overlay}>
                                <Text style={styles.text}>{`+${images.length - 5}`}</Text>
                            </TouchableOpacity>
                        )}
                    </View>
                )}
        </>
    );
};

interface ImageFbGridProps {
    images: string[],
    style: ViewStyle,
    onPress?: (image: string, index: number) => void
}

export const ImageFbGrid = memo(function ImageFbGrid(props: ImageFbGridProps) {
    const {images, style, onPress} = props;
    const [visibleImage, showImage, hideImage] = useBoolean(false);
    const [initialIndex, setInitialIndex] = useState(0);

    const onPressCb = useCallback((image: string, index: number) => {
        setInitialIndex(index);
        showImage();
    }, []);

    return images.length > 0 ? (
        <>
            <View style={{...styles.container_row, ...style}}>
                {images.length < 3 ? (
                    <TwoImages images={images} onPress={onPressCb}/>
                ) : (
                    <ImageItem image={images[0]} onPress={onPressCb} index={0}/>
                )}
                {images.length > 2 && (
                    <View style={styles.container}>
                        {renderImages(1, false, images, onPressCb)}
                    </View>
                )}
                {images.length > 3 && (
                    <View style={styles.container}>
                        {renderImages(3, images.length > 5, images, onPressCb)}
                    </View>
                )}
            </View>
            <PhotoViewModal
                initialIndex={initialIndex}
                images={images}
                isVisible={visibleImage}
                onCloseRequest={hideImage}
            />
            </>
    ) : null
});

export const styles = StyleSheet.create({
    container_row: {
        flexDirection: 'row',
        margin: -4
    },
    container: {
        flex: 1,
    },
    image_view: {
        flex: 1,
    },
    image: {
        width: '100%',
        height: '100%',
        backgroundColor: 'grey',
        borderRadius: 8
    },
    item_view: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 3
    },
    item_view_overlay: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        right: 0,
        left: 0,
        backgroundColor: 'rgba(52, 52, 52, 0.8)',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 3,
        borderRadius: 8
    },
    text: {
        color: 'white',
        fontSize: 18,
    },
});
