// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

import remarkMath from 'remark-math'
import rehypeMathJax from 'rehype-mathjax'

import cloudflare from '@astrojs/cloudflare';


// https://astro.build/config
export default defineConfig({
    markdown: {
	remarkPlugins: [remarkMath],
	rehypePlugins: [rehypeMathJax],
    },

    integrations: [
	starlight({
	    title: 'dylancode.dev',
	    social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/dylanopen' }],
	    components: {
		ThemeProvider: './src/components/AlwaysDark.astro',
		ThemeSelect: './src/components/HideThemeSwitcher.astro',
	    },
	    customCss: [
		"./src/css/mathjax.css",
		"./src/css/custom.css"
	    ],
	    sidebar: [
		'',
		{
		    label: 'Maths',
		    collapsed: true,

		    items: [
			{
			    label: 'Indices and surds',
			    collapsed: true,
			    badge: 'Algebra',
			    items: [
				'maths/laws-of-indices',
				'maths/surds',
				'maths/rationalising-the-denominator',
			    ]
			},
			{
			    label: 'Quadratics',
			    collapsed: true,
			    badge: 'Algebra',
			    items: [
				'quadratic-functions-and-graphs',
				'discriminant',
				'completing-the-square',
				'solving-by-completing-the-square',
				'quadratic-inequalities',
				'factorising-quadratics',
			    ]
			},
			{
			    label: 'Graph transformations',
			    collapsed: true,
			    badge: 'Graphs',
			    items: [
				'translating-graphs',
				'stretching-graphs',
			    ]
			},
			{
			    label: 'Simultaneous equations',
			    collapsed: true,
			    badge: 'Algebra',
			    items: [
				'simultaneous-equation-elimination',
				'simultaneous-equation-substitution',
				'number-of-intersections-between-graphs',
			    ]
			},
			{
			    label: 'Complex numbers',
			    collapsed: true,
			    badge: 'Further',
			    items: [
				'adding-complex-numbers',
				'subtracting-complex-numbers',
				'complex-number-real-multiplication',
				'complex-conjugate',
				'complex-numbers',
				'complex-solutions-to-polynomials',
				'dividing-complex-numbers',
				'factorising-polynomials-with-complex-roots',
				'imaginary-constant',
				'multiplying-a-complex-number-by-its-conjugate',
			    ]
			},
			{
			    label: 'Game theory',
			    collapsed: true,
			    badge: 'Discrete',
			    items: [
				'pay-off-matrices',
				'play-safe-strategy',
			    ]
			},
			{
			    label: 'Polynomial arithmetic',
			    collapsed: true,
			    badge: 'Algebra',
			    items: [
				'expanding-brackets',
				'polynomial-division',
				'factor-theorem',
			    ]
			},
			{
			    label: 'Circles',
			    collapsed: true,
			    badge: 'Geometry',
			    items: [
				'equation-of-a-circle',
			    ]
			},
			{
			    label: 'Linear programming',
			    collapsed: true,
			    badge: { text: 'Experimental', variant: 'caution' },
			    items: [
				'linear-programming',
			    ]
			},
			{
			    label: 'Unsorted',
			    collapsed: true,
			    badge: { text: 'Preview', variant: 'caution' },
			    items: [
				'common-function-graphs',
				'linear-function-modulus',
				'logarithm-function',
				'equation-of-a-straight-line',
				'critical-path-analysis',
				'quadratic-roots-and-coefficients',
				'network-flows',
			    ]
			},
		    ],
		},
		{
		    label: 'Physics',
		    collapsed: true,
		    items: [
			{
			    label: 'Electricity',
			    items: [
				{ label: 'Calculating the number of electrons', slug: 'physics/calculating-the-number-of-electrons' },
			    ],
			},
		    ]
		},
		{
		    label: 'Computing',
		    collapsed: true,
		    items: [
			{
			    label: 'Software classification',
			    items: [
				'systems-software'
			    ],
			},
		    ]
		},
	    ],
	}),
    ],

    adapter: cloudflare(),
});
