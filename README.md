# Simple static page

Made for a [dev.to challenge](https://dev.to/challenges/frontend-2024-05-29)

I have used CSS and JavaScript to make the starter HTML markup beautiful, interactive, and useful.
The template does not include photos, so to make it visually appealing, a simple JavaScript with css var trick was used.

## Live

[Github pages](https://samvimes01.github.io/markup-css-js)

## Tech used

- MDN: new HTML and CSS features like [dialog](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dialog), [css import](https://developer.mozilla.org/en-US/docs/Web/CSS/@import), [css nesting](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_nesting/Using_CSS_nesting), [image set](https://developer.mozilla.org/en-US/docs/Web/CSS/image/image-set), [css var](https://developer.mozilla.org/en-US/docs/Web/CSS/var).
- Interactive buttons: [cssbuttons.app](https://cssbuttons.app/)
- Cards: [neumorphism.io](https://neumorphism.io/), [glassmorphism](https://hype4.academy/tools/glassmorphism-generator)
- Animations: [wave svg](https://getwaves.io/) and some experiments with keyframes and pseudoelements
- Interactivity without changing HTML: used :after, :before pseudoelements, JavaScript and css var for adding and image
- Images: all images were generated with a special prompt where names of the beaches were included. [Adobe Firefly did all the magic](https://firefly.adobe.com/inspire/images). To descrease size a special resizing and converter script was used (created with the ChatGPT 4o help)

ImageMagick and the necessary codecs for WebP and AVIF are required.

```sh
# Linux:
sudo apt-get install imagemagick libwebp-dev libheif-dev
# or Mac
brew install imagemagick
```

<details>
  <summary>Click me to see a bash script used for converting 2,5 Mb .jpg to 100kb AVIF and WebP</summary>

```sh
#!/bin/bash

if ! command -v magick &> /dev/null
then
    echo "ImageMagick (convert) could not be found. Please install it first."
    exit 1
fi

display_usage() {
    echo "Usage: $0 source.jpeg [width] [height] [quality]"
    echo "Example: $0 image.jpg 800 600"
    echo "If height is not provided, aspect ratio will be maintained."
}

if [ $# -lt 1 ]; then
    display_usage
    exit 1
fi

SOURCE_IMAGE=$1
WIDTH=$2
HEIGHT=$3
QUALITY=$4
if [ -z "${QUALITY}" ]; then
    QUALITY=80
fi

BASENAME=$(basename "$SOURCE_IMAGE" .jpg)
OUTPUT="${BASENAME}"

if [ -z "${WIDTH}" ]; then
    magick "${SOURCE_IMAGE}" -quality "${QUALITY}" "${OUTPUT}.webp"
    magick "${SOURCE_IMAGE}" -quality 60 "${OUTPUT}.avif"
elif [ -z "${HEIGHT}" ]; then
    OUTPUT="${BASENAME}_${WIDTH}"
    magick "${SOURCE_IMAGE}" -resize "${WIDTH}x" -quality "${QUALITY}" "${OUTPUT}.webp"
    magick "${SOURCE_IMAGE}" -resize "${WIDTH}x" -quality 60 "${OUTPUT}.avif"
else
    OUTPUT="${BASENAME}_${WIDTH}x${HEIGHT}"
    magick "${SOURCE_IMAGE}" -resize "${WIDTH}x${HEIGHT}" -quality "${QUALITY}" "${OUTPUT}.webp}"
    magick "${SOURCE_IMAGE}" -resize "${WIDTH}x${HEIGHT}" -quality 60 "${OUTPUT}.avif}"
fi


echo "Conversion complete."
echo "WebP: ${OUTPUT}"
echo "AVIF: ${OUTPUT}"
```

</details>

## Install and run

Git clone. There is no npm, no node_modules. Just plain JavaScript.
Run a static server like `python -m http.server`, or `caddy`, or VSCode liveserver
