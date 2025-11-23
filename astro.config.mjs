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
			    label: 'Number',
			    collapsed: true,
			    items: [
				{
				    label: 'Types of number',
				    collapsed: true,
				    badge: 'Number',
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
				    badge: 'Number',
				    items: [
					'order-of-operations',
				    ]
				},
				{
				    label: 'Rounding',
				    collapsed: true,
				    badge: 'Number',
				    items: [
					'rounding-to-decimal-places',
					'rounding-to-nearest-integer',
					'rounding-to-significant-figures',
				    ]
				},
				{
				    label: 'Representing fractions',
				    collapsed: true,
				    badge: 'Number',
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
				    badge: 'Number',
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
				    badge: 'Number',
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
				    badge: 'Number',
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
				    badge: 'Algebra',
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
				    badge: 'Algebra',
				    items: [
					'equation-of-a-straight-line',
					'finding-the-equation-of-a-straight-line',
					'linear-function-modulus',
				    ]
				},
				{
				    label: 'Inequalities',
				    collapsed: true,
				    badge: 'Algebra',
				    items: [
					'inequality-signs',
					'solving-linear-inequalities',
					'solving-quadratic-inequalities',
				    ]
				},
				{
				    label: 'Polynomial arithmetic',
				    collapsed: true,
				    badge: 'Algebra',
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
				    badge: 'Algebra',
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
				    badge: 'Algebra',
				    items: [
					'arithmetic-sequences',
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
				    label: 'Logarithms',
				    collapsed: true,
				    badge: 'Algebra',
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
				    badge: 'Graphs',
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
				    badge: 'Geometry',
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
				    badge: 'Calculus',
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
				    label: 'Coefficient and root relationships',
				    collapsed: true,
				    badge: 'Further',
				    items: [
					'quadratic-roots-and-coefficients',
				    ]
				},
				{
				    label: 'Graphs',
				    collapsed: true,
				    badge: 'Discrete',
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
				    badge: 'Discrete',
				    items: [
				    ]
				},
				{
				    label: 'Network flows',
				    collapsed: true,
				    badge: 'Discrete',
				    items: [
					'network-flows',
				    ]
				},
				{
				    label: 'Game theory',
				    collapsed: true,
				    badge: 'Discrete',
				    items: [
					'pay-off-matrices',
					'play-safe-strategy',
					'dominating-strategies',
				    ]
				},
				{
				    label: 'Linear programming',
				    collapsed: true,
				    badge: { text: 'Discrete', variant: 'caution' },
				    items: [
					'linear-programming',
				    ]
				},
			    ]
			},
			{
			    label: 'Unsorted',
			    collapsed: true,
			    badge: { text: 'Preview', variant: 'caution' },
			    items: [
				'common-function-graphs',
				'unit-prefixes',
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
