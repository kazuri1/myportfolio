import { Media } from "../components/atoms/Media";

export default {
  title: "Atoms/Media",
  component: Media,
};

export const Default = {
  args: {
    alt: "Default media placeholder",
  },
};

export const CustomPlaceholder = {
  args: {
    placeholderImage:
      "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=500&h=300&fit=crop",
    alt: "Custom placeholder image",
  },
};

export const WithVideo = {
  args: {
    src: "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4",
    alt: "Sample video content",
  },
};

export const WithGif = {
  args: {
    src: "https://media.giphy.com/media/3o7abKhOpu0NwenH3O/giphy.gif",
    alt: "Animated GIF content",
  },
};

export const WithImage = {
  args: {
    src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop",
    alt: "Static image content",
  },
};

export const CustomDimensions = {
  args: {
    width: "400px",
    height: "300px",
    alt: "Custom sized media container",
  },
};

export const WideFormat = {
  args: {
    width: "600px",
    height: "200px",
    alt: "Wide format media container",
  },
};
