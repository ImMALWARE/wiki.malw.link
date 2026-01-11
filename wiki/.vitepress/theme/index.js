import DefaultTheme from 'vitepress/theme';
import imageViewer from 'vitepress-plugin-image-viewer';
import vImageViewer from 'vitepress-plugin-image-viewer/lib/vImageViewer.vue';
import { useRoute } from 'vitepress';
import './custom.css';
import Layout from './Layout.vue';

export default {
    ...DefaultTheme,
    Layout: Layout,
    enhanceApp(ctx) {
        DefaultTheme.enhanceApp(ctx);
        ctx.app.component('vImageViewer', vImageViewer);
    },
    setup() {
        const route = useRoute();
        imageViewer(route);
    }
};