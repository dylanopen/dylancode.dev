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
	    social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/dylanopen' }],
	    customCss: [
		"./src/css/mathjax.css",
		"./src/css/custom.css"
	    ],
	    sidebar: [
		{ label: 'Welcome to dylancode.dev', slug: 'intro' },
		{
		    label: 'Maths',
		    items: [
			{
			    label: 'Unsorted',
			    items: [
				{ label: 'Laws of indices', slug: 'maths/laws-of-indices' },
				{ label: 'Surds', slug: 'maths/surds' },
				{ label: 'Quadratic functions and their graphs', slug: 'maths/quadratic-functions-and-graphs' },
				{ label: 'The discriminant of a quadratic equation', slug: 'maths/discriminant' },
				{ label: 'Completing the square', slug: 'maths/completing-the-square' },
				{ label: 'Solving quadratic equations by completing the square', slug: 'maths/solving-by-completing-the-square' },
				{ label: 'Solving simultaneous equations using elimination', slug: 'maths/simultaneous-equation-elimination' },
				{ label: 'Solving simultaneous equations using substitution', slug: 'maths/simultaneous-equation-substitution' },
				{ label: 'Quadratic inequalities', slug: 'maths/quadratic-inequalities' },
				{ label: 'Expanding brackets', slug: 'maths/expanding-brackets' },
				{ label: 'Factorising quadratics', slug: 'maths/factorising-quadratics' },
				{ label: 'The factor theorem', slug: 'maths/factor-theorem' },
				{ label: 'Polynomial division', slug: 'maths/polynomial-division' },
				{ labels: 'Common function graphs', slug: 'maths/common-function-graphs' },
				{ label: "Modulus of a linear function", slug: 'maths/linear-function-modulus' },
				{ label: 'Translating graphs', slug: 'maths/translating-graphs' },
				{ label: 'Stretching graphs', slug: 'maths/stretching-graphs' },
				{ label: 'Number of intersections between graphs', slug: 'maths/number-of-intersections-between-graphs' },
				{ label: 'The logarithm function', slug: 'maths/logarithm-function' },
				{ label: 'Equation of a straight line', slug: 'maths/equation-of-a-straight-line'}
			    ]
			},
		    ],
		},
		{
		    label: 'Physics',
		    items: [
			{
			    label: 'Electricity',
			    items: [
				{ label: 'Calculating the number of electrons', slug: 'physics/calculating-the-number-of-electrons' },
			    ],
			},
		    ]
		},
	    ],
	}),
    ],
});
