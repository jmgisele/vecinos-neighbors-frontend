import type { Collection } from 'tinacms';
import { heroBlockSchema } from '../../src/components/blocks/hero.template';
import { featuresBlockSchema } from '../../src/components/blocks/features.template';
import { statsBlockSchema } from '../../src/components/blocks/stats.template';
import { ctaBlockSchema } from '../../src/components/blocks/cta.template';
import { testimonialBlockSchema } from '../../src/components/blocks/testimonial.template';
import { contentBlockSchema } from '../../src/components/blocks/content.template';
import { splitBlockSchema } from '../../src/components/blocks/split.template';

export const PageCollection: Collection = {
	name: 'page',
	label: 'Pages',
	path: 'src/content/page',
	format: 'mdx',
	ui: {
		router: ({ document }) => `/${document._sys.filename}`,
    filename: {
      readonly: true,
      slugify: (values) => {
        return `${values?.seoTitle
          ?.toLowerCase()
          .replace(/ /g, '-')}`
      },
    },
  },
	fields: [
		{
			name: 'seoTitle',
			label: 'Meta Title (SEO)',
			type: 'string',
			isTitle: true,
			required: true,
			description:
				"Shown in the browser tab and search results — not on the page itself. To change the heading visitors see at the top of the page, edit the Headline of the page's Hero block (if it has one) in Page Sections below.",
		},
		{
			type: 'object',
			list: true,
			name: 'blocks',
			label: 'Page Sections',
			description:
				"The visible content of the page.",
			ui: { visualSelector: true },
			templates: [
				heroBlockSchema,
				featuresBlockSchema,
				statsBlockSchema,
				ctaBlockSchema,
				contentBlockSchema,
				testimonialBlockSchema,
				splitBlockSchema,
			],
		},
	],
};
