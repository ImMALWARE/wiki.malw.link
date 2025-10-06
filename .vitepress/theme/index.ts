import DefaultTheme from 'vitepress/theme'
import type { Theme } from 'vitepress'
import googleAnalytics from 'vitepress-plugin-google-analytics'

import giscusTalk from 'vitepress-plugin-comment-with-giscus';
import { useData, useRoute } from 'vitepress';

import './style/index.css'
import Layout from './Layout.vue'

const theme: Theme = {
    ...DefaultTheme,
    Layout: Layout,

    enhanceApp({app}) {
        googleAnalytics({
          id: 'G-KMJENJYYPP'
        })
    },
    setup() {
        const { frontmatter } = useData();
        const route = useRoute();
            
        giscusTalk({
          repo: 'ImMALWARE/wiki.malw.link',
          repoId: 'R_kgDOPjI_cw',
          category: 'Comments',
          categoryId: 'DIC_kwDOPjI_c84CuiwL',
          mapping: 'pathname',
          inputPosition: 'top',
          lang: 'ru',
          }, 
          {
            frontmatter, route
          },
          true
        );
    }
}

export default theme