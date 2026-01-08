// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

import remarkMath from 'remark-math'
import rehypeMathJax from 'rehype-mathjax'

// https://astro.build/config
export default defineConfig({
    markdown: {
	remarkPlugins: [remarkMath],
	rehypePlugins: [rehypeMathJax],
    },

    integrations: [
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
					'algebraic-fractions',
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
				{
				    label: 'Ratio',
				    collapsed: true,
				    items: [
					'ratio-meaning',
					'simplifying-ratios',
				    ]
				}
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
					'quadratic-formula',
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
				{
				    label: 'Proportionality',
				    collapsed: true,
				    items: [
					'direct-proportion',
					'inverse-proportion',
				    ]
				},
				{
				    label: 'Binomial expansion',
				    collapsed: true,
				    items: [
					'binomial-expansion',
					'binomial-expansion-by-factorial',
				    ]
				},
			    ]
			},
			{
			    label: 'Graphs',
			    collapsed: true,
			    items: [
				{
				    label: 'Coordinates',
				    collapsed: true,
				    items: [
					'cartesian-coordinates',
				    ]
				},
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
				{
				    label: 'Real-world graphs',
				    collapsed: true,
				    items: [
					'distance-time-graph',
				    ]
				},
				{
				    label: 'Exponential graphs',
				    collapsed: true,
				    items: [
					'exponential-function',
					'exponential-function-gradient',
					'logarithm-function-gradient',
					'logarithm-graph-equation',
				    ]
				},
			    ]
			},
			{
			    label: 'Geometry',
			    collapsed: true,
			    items: [
				{
				    label: 'Coordinate geometry',
				    collapsed: true,
				    items: [
					'distance-between-two-points',
					'midpoint-of-points',
					'straight-line-equation',
					'circle-line-intersection',
				    ]
				},
				{
				    label: 'Circles',
				    collapsed: true,
				    items: [
					'equation-of-a-circle',
				    ]
				},
				{
				    label: 'Vectors',
				    collapsed: true,
				    items: [
					'position-vectors',
				    ]
				},
				{
				    label: 'Triangles',
				    collapsed: true,
				    items: [
//					'sine-rule',
				    ]
				},
				{
				    label: 'Trigonomic laws',
				    collapsed: true,
				    items: [
					'finding-all-sine-angles',
					'finding-all-cosine-angles',
					'finding-all-tangent-angles',
					'calculating-tangent',
				    ]
				}
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
					'differentiation-from-first-principles',
					'second-derivative',
					'point-of-inflection',
					'turning-point',
					'classifying-stationary-points',
					'tangent-from-differentiation',
					'normal-from-differentiation',
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
					'cubic-roots-and-coefficients',
				    ]
				},
				{
				    label: 'Matrices',
				    collapsed: true,
				    items: [
					'matrix-definition',
					'matrix-addition',
					'scalar-matrix-multiplication',
					'matrix-multiplication',
					'identity-matrix',
					'matrix-determinant',
					'inverse-matrix',
					'singular-matrix',
					'matrix-transformations',
					'matrix-transformations-about-the-origin',
					'solving-simultaneous-equations-using-matrices',
					'general-rotation-matrix',
				    ]
				},
				{
				    label: 'Vectors',
				    collapsed: true,
				    items: [
					'vector-line-equation',
					'converting-vector-to-cartesian-line',
					'converting-cartesian-to-vector-line',
					'converting-vector-to-cartesian-line-3d',
					'converting-cartesian-to-vector-line-3d',
				    ]
				}
			    ]
			},
			{
			    label: 'Discrete',
			    collapsed: true,
			    items: [
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
				{
				    label: 'Networks',
				    collapsed: true,
				    items: [
					'network-node',
					'network-arc',
					'distance-matrix',
					'minimum-spanning-tree',
					'prim-algorithm',
					'kruskal-algorithm',
				    ]
				},
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
					'optimal-mixed-strategy',
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
				'inequality-of-arithmetic-and-geometric-means',
				'vector-translation',
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
				'resistance-in-a-bulb',
				'diode',
				'potential-divider',
				'temperature-coefficient',
				'resistivity',
				'resistance-in-a-wire',
				'resistance-in-parallel',
				'kirchoff-first-law',
				'kirchoff-second-law',
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
			},
			{
			    label: 'Units of data',
			    collapsed: true,
			    items: [
				'bit',
				'byte',
				'nibble',
				'converting-bits-to-bytes',
				'converting-bytes-to-bits',
				'decimal-prefixes',
				'binary-prefixes',
			    ]
			},
			{
			    label: 'Binary',
			    collapsed: true,
			    items: [
				'unsigned-binary'
			    ]
			},
		    ]
		},
		{
		    label: 'C# programming',
		    collapsed: true,
		    items: [
			'cs/hello-world',
			'cs/comments',
			'cs/variables',
		    ]
		}
	    ],
	}),
    ],
});
