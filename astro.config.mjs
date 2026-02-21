// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

import remarkMath from 'remark-math'
import rehypeMathJax from 'rehype-mathjax'

import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
    markdown: {
	remarkPlugins: [remarkMath],
	rehypePlugins: [rehypeMathJax],
    },
    site: 'https://dylancode.dev',

    integrations: [starlight({

	title: 'dylancode.dev',

	head: [
	    {
		tag: 'script',
		attrs: {
		    defer: true,
		    src: '/um.js',
		    'data-website-id': '529e56e4-f649-4030-a8ba-46fae5bec6b4',
		},
	    },
	],
	editLink: {
	    baseUrl: 'https://github.com/dylanopen/dylancode.dev/edit/main/',
	},
	description: '',
	/*social: [
	    { icon: 'github', label: 'GitHub', href: 'https://github.com/dylanopen' },
	    { icon: 'email', label: 'Email', href: 'mailto:docs@dylancode.dev' }
	],*/
	components: {
	    TableOfContents: './src/components/TableOfContents.astro',
	    PageSidebar: './src/components/PageSidebar.astro',
	    TwoColumnContent: './src/components/TwoColumnContent.astro',
	    Header: './src/components/Header.astro',
	    PageFrame: './src/components/PageFrame.astro',
	    Sidebar: './src/components/Sidebar.astro',
	    //Banner: './src/components/Banner.astro',
	    Footer: './src/components/Footer.astro',
	    Pagination: './src/components/Pagination.astro',
	    MobileMenuToggle: './src/components/MobileMenuToggle.astro',
	    //SocialIcons: './src/components/SocialIcons.astro',
	},
	customCss: [
	    "./src/css/custom.css",
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
				    'logarithm-of-1',
				    'self-base-logarithms',
				    'powers-of-logarithms',
				    'adding-logarithms',
				    'subtracting-logarithms',
				    'multiplying-logarithms-by-a-constant',
				    'converting-exponentials-into-logarithms',
				    'converting-logarithms-into-exponentials',
				    'disguised-logarithm-equations',
				]
			    },
			    {
				label: 'Exponential functions',
				collapsed: true,
				items: [
				    'exponential-graph',
				    'exponential-graph-gradient',
				    'base-e-exponentials',
				    'converting-exponentials-to-base-e',
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
				    'pascal-triangle',
				    'common-binomial-expansions',
				    'binomial-combination',
				    'binomial-expansion-by-factorial',
				    'binomial-theorem',
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
				    'intersection-of-circles',
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
				    'sine-rule',
				    'cosine-rule',
				]
			    },
			    {
				label: 'Trigonometric identities',
				collapsed: true,
				items: [
				    'finding-all-sine-angles',
				    'finding-all-cosine-angles',
				    'finding-all-tangent-angles',
				    'calculating-tangent',
				    'sine-cosine-square-identity',
				    'sine-cosine-offset-identity',
				    'differentiating-sine',
				    'differentiating-cosine',
				    'inverse-trigonometry',
				]
			    },
			    {
				label: 'Radians',
				collapsed: true,
				items: [
				    'radian',
				    'arc-length-from-radians',
				    'sector-area-from-radians',
				    'small-angle-approximation',
				]
			    },
			    {
				label: 'Arcs and sectors',
				collapsed: true,
				items: [
				    'arc',
				    'sector',
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
			    {
				label: 'Integration',
				collapsed: true,
				items: [
				    'definition-of-integration',
				    'integration-formula',
				    'integration-of-other-expressions',
				]
			    },
			    'common-calculus-results',
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
				    'matrix-dimensions',
				    'matrix-addition',
				    'matrix-subtraction',
				    'scalar-matrix-multiplication',
				    'matrix-multiplication',
				    'finding-unknowns-using-matrix-multiplication',
				    'identity-matrix',
				    'zero-matrix',
				    'matrix-multiplication-identity',
				    'transposing-matrices',
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
				    'cartesian-line-equation',
				    'converting-vector-to-cartesian-line',
				    'converting-cartesian-to-vector-line',
				    'converting-vector-to-cartesian-line-3d',
				    'converting-cartesian-to-vector-line-3d',
				    'scalar-product-of-vectors',
				    'distance-from-point-to-line',
				    'distance-between-two-lines',
				]
			    },
			    {
				label: 'Series',
				collapsed: true,
				items: [
				    'series',
				    'summation',
				    'standard-summation-results',
				    'method-of-differences',
				    'maclaurin-series-standard-results',
				    'creating-maclaurin-series'
				]
			    },
			    {
				label: 'Proof by induction',
				collapsed: true,
				items: [
				    'proof-by-induction',
				]
			    },
			    {
				label: 'Hyperbolic functions',
				collapsed: true,
				items: [
				    'sinh',
				    'cosh',
				    'tanh',
				    'hyperbolic-functions-of-zero',
				    'hyperbolic-square-difference-identity',
				    'hyperbolic-square-sum-identity',
				    'sinh2x-identity',
				]
			    },
			    {
				label: 'Polar coordinates',
				collapsed: true,
				items: [
				    'polar-coordinates',
				    'polar-coordinate-identities',
				    'polar-to-cartesian-coordinates',
				    'cartesian-to-polar-coordinates',
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
				    'network-route-inspection',
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
			label: 'Measurements',
			collapsed: true,
			items: [
			    'base-units',
			    'unit-prefixes',
			    'energy-conversions',
			]
		    },
		    {
			label: 'Errors',
			collapsed: true,
			items: [
			    'random-error',
			    'systematic-error',
			    'precision',
			    'uncertainty',
			    'compound-uncertainty',
			    'accuracy',
			    'repeatability',
			    'reproducibility',
			]
		    },
		    {
			label: 'Mechanics',
			collapsed: true,
			items: [
			    {
				label: 'Scalars and vectors',
				collapsed: true,
				items: [
				    'scalar-quantity',
				    'vector-quantity',
				    'adding-vector-quantities',
				    'separating-vectors-into-components',
				]
			    },
			    {
				label: 'Moments',
				collapsed: true,
				items: [
				    'moment',
				    'moment-formula',
				    'couple',
				    'torque',
				    'principle-of-moments',
				    'centre-of-gravity',
				]
			    },
			    {
				label: 'Linear motion',
				collapsed: true,
				items: [
				    'distance',
				    'displacement',
				    'speed',
				    'velocity',
				    'acceleration',
				    'distance-time-graph',
				    'displacement-time-graph',
				    'speed-time-graph',
				    'velocity-time-graph',
				]
			    },
			    {
				label: 'Acceleration',
				collapsed: true,
				items: [
				    'equations-for-uniform-acceleration',
				    'gravitational-acceleration',
				    'free-fall',
				]
			    },
			    {
				label: 'Projectiles',
				collapsed: true,
				items: [
				    'projectile-motion',
				    'vertical-projectile-motion',
				    'horizontal-projectile-motion',
				    'angled-projectile-motion',
				]
			    },
			    {
				label: 'Resistive forces',
				collapsed: true,
				items: [
				    'friction',
				    'drag',
				    'terminal-velocity',
				]
			    },
			    {
				label: 'Laws of motion',
				collapsed: true,
				items: [
				    'first-law-of-motion',
				    'second-law-of-motion',
				    'third-law-of-motion',
				]
			    },
			    {
				label: 'Momentum',
				collapsed: true,
				items: [
				    'momentum',
				    'momentum-and-forces',
				    'impulse',
				    'conservation-of-momentum',
				    'elastic-collision',
				    'inelastic-collision',
				    'explosion-momentum',
				]
			    },
			    {
				label: 'Energy',
				collapsed: true,
				items: [
				    'power',
				    'work-done',
				    'calculating-work-done',
				    'work-done-and-power',
				    'force-displacement-graph',
				    'conservation-of-energy',
				    'efficiency',
				]
			    },
			    {
				label: 'Energy forms',
				collapsed: true,
				items: [
				    'energy-forms',
				    'kinetic-energy',
				    'gravitational-potential-energy',
				]
			    },
			]
		    },
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
			    'electricity-revision',
			],
		    },
		    {
			label: 'Waves',
			collapsed: true,
			items: [
			    {
				'label': 'Categorising waves',
				'collapsed': true,
				'items': [
				    'progressive-wave',
				    'types-of-wave',
				    'transverse-wave',
				    'longitudinal-wave',
				    'electromagnetic-wave',
				]
			    },
			    {
				'label': 'Wave properties',
				'collapsed': true,
				'items': [
				    'wavelength',
				    'wave-frequency',
				    'wave-period',
				    'wave-speed',
				    'wave-speed-calculations',
				]
			    },
			    {
				'label': 'Refraction',
				'collapsed': true,
				'items': [
				    'refractive-index',
				    'refractive-index-of-air',
				    'snells-law',
				    'refraction-of-light',
				]
			    },
			    {
				'label': 'Reflection',
				'collapsed': true,
				'items': [
				    'reflection-of-light',
				    'total-internal-reflection',
				]
			    },
			    {
				'label': 'Fibre optics',
				'collapsed': true,
				'items': [
				    'fibre-optic-cable',
				    'fibre-optic-modal-dispersion',
				    'fibre-optic-material-dispersion',
				]
			    },
			    {
				'label': 'Diffraction',
				collapsed: true,
				items: [
				    'diffraction-of-waves',
				    'diffraction-grating',
				    'double-slit-diffraction',
				    'diffraction-path-difference',
				    'diffraction-of-polychromatic-light',
				]
			    },
			    {
				'label': 'Interference',
				collapsed: true,
				items: [
				    'wave-interference',
				    'constructive-interference',
				    'destructive-interference',
				    'wave-phase-difference',
				    'wave-path-difference',
				    'coherent-wave',

				]
			    },
			    {
				'label': 'Polarisation',
				collapsed: true,
				items: [
				    'polarised-wave',
				    'polarisation',
				    'uses-of-polarisation',
				]
			    },
			    'oscilloscope',
			    'speed-of-electromagnetic-wave',
			]
		    }
		]
	    },
	    {
		label: 'Chemistry',
		collapsed: true,
		items: [
		    {
			label: 'Atomic structure',
			collapsed: true,
			items: [
			    'atoms',
			    'nucleus',
			    'protons',
			]
		    },
		]
	    },
	    {
		label: 'Computing',
		collapsed: true,
		items: [
		    {
			label: 'Hardware and software',
			collapsed: true,
			items: [
			    'hardware',
			    'software',
			    'application-software',
			],
		    },
		    {
			label: 'Operating systems',
			collapsed: true,
			items: [
			    'operating-system-role',
			    'os-resource-management',
			]
		    },
		    {
			label: 'Types of programming language',
			collapsed: true,
			items: [
			    'low-level-language',
			    'high-level-language',
			    'declarative-programming',
			    'imperative-programming',
			]
		    },
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
			    'source-code',
			    'object-code',
			    'code-translators',
			    'compiler',
			    'interpreter',
			    'assembler',
			    'bytecode',
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
		    {
			label: 'Logic gates',
			collapsed: true,
			items: [
			    'logic-gates',
			    'truth-table',
			    'not-gate',
			    'and-gate',
			    'or-gate',
			    'nand-gate',
			    'nor-gate',
			    'xor-gate',
			]
		    },
		    {
			label: 'Boolean algebra',
			collapsed: true,
			items: [
			    'boolean-and',
			    'boolean-or',
			    'boolean-xor',
			    'boolean-not',
			    'boolean-and-one',
			    'boolean-and-zero',
			    'boolean-or-one',
			    'boolean-or-zero',
			]
		    },
		    {
			label: 'Networks',
			collapsed: true,
			items: [
			    'network-interface-card',
			    'local-area-network',
			    'server',
			    'client',
			    'network-switch',
			    'types-of-server-hosting',
			    'wide-area-network',
			    'serial-transmission',
			    'parallel-transmission',
			    'synchronous-transmission',
			    'asynchronous-transmission',
			    'baud-rate',
			    'bit-rate',
			    'bandwidth',
			]
		    }
		]
	    },
	    {
		label: 'RISC-V assembly',
		collapsed: true,
		items: [
		    'riscv/smallest-program',
		    'riscv/immediate-and-register-instructions',
		    'riscv/setting-registers',
		    'riscv/copying-registers',
		    'riscv/adding-immediates',
		    'riscv/adding-registers',
		    'riscv/subtraction',
		    'riscv/multiplication',
		    'riscv/division',
		    'riscv/labels',
		    'riscv/jumping',
		]
	    },
	    {
		label: 'C programming',
		collapsed: true,
		items: [
		    {
			label: 'Hello world',
			collapsed: true,
			items: [
			    'c/project-setup',
			    'c/hello-world',
			    'c/compiling-and-running',
			]
		    },
		    'c/comments',
		    'c/variables',
		    {
			label: 'Data types',
			collapsed: true,
			items: [
			    'c/data-types',
			    'c/integers',
			    'c/short',
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
		    {
			label: 'Data types',
			collapsed: true,
			items: [
			    'cs/data-types',
			    'cs/integers',
			    'cs/floats',
			    'cs/chars',
			    'cs/boolean',
			    'cs/type-casting',
			]
		    },
		    {
			label: 'Operators',
			collapsed: true,
			items: [
			    'cs/arithmetic-operators',
			    'cs/division',
			    'cs/modulus',
			    'cs/assignment-operators',
			    'cs/comparison-operators',
			    'cs/logical-operators',
			]
		    },
		    {
			label: 'Selection',
			collapsed: true,
			items: [
			    'cs/if-statements',
			    'cs/else-if-statements',
			    'cs/else-statements',
			]
		    },
		    {
			label: 'Iteration',
			collapsed: true,
			items: [
			    'cs/loops',
			    'cs/while-loops',
			    'cs/for-loops',
			    'cs/break-statements',
			    'cs/continue-statements',
			]
		    },
		    {
			label: 'Arrays',
			collapsed: true,
			items: [
			    'cs/creating-arrays',
			    'cs/indexing-arrays',
			    'cs/iterating-arrays',
			    'cs/foreach-loops',
			]
		    },
		    {
			label: 'Methods',
			collapsed: true,
			items: [
			    'cs/method-declaration',
			    'cs/method-calling',
			    'cs/named-method-arguments',
			    'cs/default-parameters',
			    'cs/method-overloading',
			]
		    },
		    {
			label: 'User input',
			collapsed: true,
			items: [
			    'cs/readline',
			]
		    },
		    {
			label: 'Classes',
			collapsed: true,
			items: [
			    'cs/classes',
			    'cs/class-declaration',
			    'cs/object-instantiation',
			    'cs/fields',
			    'cs/class-methods',
			]
		    },
		]
	    },
	    {
		label: 'Minecraft plugin coding',
		collapsed: true,
		items: [
		    'minecraft-plugin/project-structure',
		]
	    },
	    {
		label: 'Minecraft server',
		collapsed: true,
		items: [
		    'minecraft/optimisation',
		    {
			label: 'server.properties',
			collapsed: false,
			items: [
			    'minecraft/properties/view-distance',
			    'minecraft/properties/simulation-distance',
			    'minecraft/properties/sync-chunk-writes',
			    'minecraft/properties/network-compression-threshold',
			    'minecraft/properties/entity-broadcast-range-percentage',
			]
		    },
		    {
			label: 'bukkit.yml',
			collapsed: false,
			items: [
			    'minecraft/bukkit/spawn-limits',
			    'minecraft/bukkit/ticks-per',
			]
		    },
		    {
			label: 'spigot.yml',
			collapsed: false,
			items: [
			    'minecraft/spigot/nerf-spawner-mobs',
			    'minecraft/spigot/merge-radius',
			    'minecraft/spigot/zombie-aggressive-towards-villager',
			    'minecraft/spigot/mob-spawn-range',
			    'minecraft/spigot/entity-activation-range',
			    'minecraft/spigot/wake-up-inactive',
			    'minecraft/spigot/entity-tracking-range',
			    'minecraft/spigot/hopper',
			    'minecraft/spigot/max-tnt-per-tick',
			]
		    },
		]
	    },
	],
    }), icon()],
});
