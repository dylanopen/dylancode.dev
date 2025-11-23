// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

import remarkMath from 'remark-math'
import rehypeMathJax from 'rehype-mathjax'

import partytown from '@astrojs/partytown'

import cloudflare from '@astrojs/cloudflare';


// https://astro.build/config
export default defineConfig({
    markdown: {
	remarkPlugins: [remarkMath],
	rehypePlugins: [rehypeMathJax],
    },

    integrations: [
	partytown({
	    config: {
		forward: ["dataLayer.push"],
	    },
	}),

	/*

<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-2J8B1X5W7E"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-2J8B1X5W7E');
</script>

	 */
	starlight({
	    title: 'dylancode.dev',

	    head: [
		{
		    tag: 'script',
		    attrs: {
			defer: true,
			src: 'https://cloud.umami.is/script.js',
			'data-website-id': '529e56e4-f649-4030-a8ba-46fae5bec6b4',
		    }
		},
	    ],
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
			    label: 'Number',
			    collapsed: true,
			    items: [
				{
				    label: 'Types of number',
				    collapsed: true,
				    items: [
					'natural-numbers',
					'integers',
					'rational-numbers',
					'irrational-numbers',
					'real-numbers',
				    ]
				},
				{
				    label: 'Arithmetic',
				    collapsed: true,
				    items: [
					'order-of-operations',
				    ]
				},
				{
				    label: 'Rounding',
				    collapsed: true,
				    items: [
					'rounding-to-decimal-places',
					'rounding-to-nearest-integer',
					'rounding-to-significant-figures',
				    ]
				},
				{
				    label: 'Representing fractions',
				    collapsed: true,
				    items: [
					'converting-percentages-to-decimals',
					'converting-decimals-to-percentages',
					'converting-fractions-to-decimals',
					'converting-decimals-to-fractions',
					'converting-fractions-to-percentages',
					'converting-percentages-to-fractions',
					'converting-recurring-decimals-to-fractions',
				    ]
				},
				{
				    label: 'Divisibility',
				    collapsed: true,
				    items: [
					'prime-numbers',
					'composite-numbers',
					'prime-factor-decomposition',
					'highest-common-factor',
					'lowest-common-multiple',
				    ]
				},
				{
				    label: 'Fractions',
				    collapsed: true,
				    items: [
					'simplifying-fractions',
					'multiplying-fractions',
					'dividing-fractions',
					'adding-fractions',
					'subtracting-fractions',
				    ]
				},
				{
				    label: 'Percentages',
				    collapsed: true,
				    items: [
					'converting-percentages-to-decimals',
					'converting-decimals-to-percentages',
					'percentage-of-a-quantity',
					'percentage-increase',
					'percentage-decrease',
				    ]
				},
			    ]
			},
			{
			    label: 'Algebra',
			    collapsed: true,
			    items: [
				{
				    label: 'Indices and surds',
				    collapsed: true,
				    items: [
					'laws-of-indices',
					'multiplying-indices',
					'dividing-indices',
					'raising-an-index-to-an-index',
					'power-of-0',
					'power-of-1',
					'fractional-powers',
					'negative-powers',
					'changing-the-base-of-a-power',
					'surds',
					'simplifying-surds',
					'adding-surds',
					'subtracting-surds',
					'multiplying-surds',
					'dividing-surds',
					'rationalising-the-denominator',
				    ]
				},
				{
				    label: 'Linear functions',
				    collapsed: true,
				    items: [
					'equation-of-a-straight-line',
					'finding-the-equation-of-a-straight-line',
					'linear-function-modulus',
				    ]
				},
				{
				    label: 'Inequalities',
				    collapsed: true,
				    items: [
					'inequality-signs',
					'solving-linear-inequalities',
					'solving-quadratic-inequalities',
				    ]
				},
				{
				    label: 'Polynomial arithmetic',
				    collapsed: true,
				    items: [
					'expanding-brackets',
					'expanding-single-brackets',
					'expanding-double-brackets',
					'expanding-triple-brackets',
					'expanding-brackets-with-surds',
					'factorising-quadratics',
					'polynomial-division',
					'difference-of-two-squares',
					'factor-theorem',
				    ]
				},
				{
				    label: 'Quadratics',
				    collapsed: true,
				    items: [
					'quadratic-functions-and-graphs',
					'discriminant',
					'completing-the-square',
					'solving-by-completing-the-square',
					'solving-disguised-quadratics',
				    ]
				},
				{
				    label: 'Sequences',
				    collapsed: true,
				    items: [
					'arithmetic-sequences',
				    ]
				},
				{
				    label: 'Simultaneous equations',
				    collapsed: true,
				    items: [
					'simultaneous-equation-elimination',
					'simultaneous-equation-substitution',
					'number-of-intersections-between-graphs',
				    ]
				},
				{
				    label: 'Logarithms',
				    collapsed: true,
				    items: [
					'logarithm-function',
					'laws-of-logarithms',
					'adding-logarithms',
					'subtracting-logarithms',
					'multiplying-logarithms-by-a-constant',
				    ]
				},
			    ]
			},
			{
			    label: 'Graphs',
			    collapsed: true,
			    items: [
				{
				    label: 'Graph transformations',
				    collapsed: true,
				    items: [
					'translating-graphs',
					'stretching-graphs',
					'parallel-line-equations',
					'perpendicular-line-equations',
				    ]
				},
			    ]
			},
			{
			    label: 'Geometry',
			    collapsed: true,
			    items: [
				{
				    label: 'Circles',
				    collapsed: true,
				    items: [
					'equation-of-a-circle',
				    ]
				},
			    ]
			},
			{
			    label: 'Calculus',
			    collapsed: true,
			    items: [
				{
				    label: 'Differentiation',
				    collapsed: true,
				    items: [
					'definition-of-differentiation',
					'derivative-notation',
					'power-rule-for-differentiation',
				    ]
				},
			    ]
			},
			{
			    label: 'Further',
			    collapsed: true,
			    items: [
				{
				    label: 'Complex numbers',
				    collapsed: true,
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
				    label: 'Coefficient and root relationships',
				    collapsed: true,
				    items: [
					'quadratic-roots-and-coefficients',
				    ]
				},
				{
				    label: 'Graphs',
				    collapsed: true,
				    items: [
					'graph-vertex',
					'graph-edge',
					'graph-walk',
					'graph-trail',
					'graph-path',
					'graph-cycle',
					'graph-loop',
					'simple-graph',
					'connected-graph',
					'complete-graph',
					'graph-tree',
					'subgraph',
					'eulerian-graph',
					'hamilton-graph',
					'planar-graph',
					'adjacency-matrix',
					'graph-complement',
					'graph-subdivision',
					'bipartite-graph',
					'isomorphic-graph',
				    ]
				},
			    ]
			},
			{
			    label: 'Discrete',
			    collapsed: true,
			    items: [
				{
				    label: 'Activity networks',
				    collapsed: true,
				    items: [
				    ]
				},
				{
				    label: 'Network flows',
				    collapsed: true,
				    items: [
					'network-flows',
				    ]
				},
				{
				    label: 'Game theory',
				    collapsed: true,
				    items: [
					'pay-off-matrices',
					'play-safe-strategy',
					'dominating-strategies',
				    ]
				},
				{
				    label: 'Linear programming',
				    collapsed: true,
				    items: [
					'linear-programming',
				    ]
				},
			    ]
			},
			{
			    label: 'Unsorted',
			    collapsed: true,
			    items: [
				'common-function-graphs',
				'unit-prefixes',
				'inequality-of-arithmetic-and-geometric-means',
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
			    collapsed: true,
			    items: [
				'basics-of-electricity',
				'electrical-charge',
				'electrical-current',
				'voltage',
				'electrical-resistance',
				'electrical-energy',
				'electrical-power',
				'units-of-energy',
				'calculating-the-number-of-electrons',
			    ],
			},
		    ]
		},
		{
		    label: 'Computing',
		    collapsed: true,
		    items: [
			{
			    label: 'Systems software',
			    collapsed: true,
			    items: [
				'systems-software',
				'operating-systems',
				'utility-programs',
				'code-libraries',
			    ],
			},
			{
			    label: 'Code translation',
			    collapsed: true,
			    items: [
				'code-translators',
				'compiler',
				'interpreter',
				'assembler',
			    ],
			},
			{
			    label: 'Number systems',
			    collapsed: true,
			    items: [
				'natural-numbers',
			    ]
			}
		    ]
		},
	    ],
	}),
    ],

    adapter: cloudflare(),
});
