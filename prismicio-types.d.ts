// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismic from '@prismicio/client'

type Simplify<T> = { [KeyType in keyof T]: T[KeyType] }

type HomepageDocumentDataSlicesSlice =
  | ContentSlice
  | HeroSlice
  | ImageWithTextSlice
  | StepsSlice
  | CarouselSlice

/**
 * Content for Homepage documents
 */
interface HomepageDocumentData {
  /**
   * Title field in *Homepage*
   *
   * - **Field Type**: Title
   * - **Placeholder**: The title of the homepage
   * - **API ID Path**: homepage.title
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  title: prismic.TitleField

  /**
   * Slice Zone field in *Homepage*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: homepage.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<HomepageDocumentDataSlicesSlice> /**
   * Meta Title field in *Homepage*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: homepage.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_title: prismic.KeyTextField

  /**
   * Meta Description field in *Homepage*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: homepage.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_description: prismic.KeyTextField

  /**
   * Meta Image field in *Homepage*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: homepage.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>
}

/**
 * Homepage document from Prismic
 *
 * - **API ID**: `homepage`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type HomepageDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<
    Simplify<HomepageDocumentData>,
    'homepage',
    Lang
  >

type PageDocumentDataSlicesSlice =
  | NewsletterSlice
  | ContentSlice
  | CarouselSlice
  | ImageWithTextSlice
  | HeroSlice

/**
 * Content for Page documents
 */
interface PageDocumentData {
  /**
   * Title field in *Page*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: page.title
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  title: prismic.RichTextField

  /**
   * Slice Zone field in *Page*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: page.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<PageDocumentDataSlicesSlice> /**
   * Meta Description field in *Page*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: page.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_description: prismic.KeyTextField

  /**
   * Meta Image field in *Page*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: page.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>

  /**
   * Meta Title field in *Page*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: page.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_title: prismic.KeyTextField
}

/**
 * Page document from Prismic
 *
 * - **API ID**: `page`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type PageDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<Simplify<PageDocumentData>, 'page', Lang>

/**
 * Item in *Post → Custom Tags*
 */
export interface PostDocumentDataCustomTagsItem {
  /**
   * Custom Tag field in *Post → Custom Tags*
   *
   * - **Field Type**: Content Relationship
   * - **Placeholder**: *None*
   * - **API ID Path**: post.custom_tags[].custom_tag
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  custom_tag: prismic.ContentRelationshipField<'tag'>
}

type PostDocumentDataSlicesSlice =
  | NewsletterSlice
  | HeroSlice
  | ImageWithTextSlice
  | ContentSlice

/**
 * Content for Post documents
 */
interface PostDocumentData {
  /**
   * Title field in *Post*
   *
   * - **Field Type**: Title
   * - **Placeholder**: *None*
   * - **API ID Path**: post.title
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  title: prismic.TitleField

  /**
   * Date Published field in *Post*
   *
   * - **Field Type**: Date
   * - **Placeholder**: *None*
   * - **API ID Path**: post.date_published
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#date
   */
  date_published: prismic.DateField

  /**
   * Excerpt field in *Post*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: post.excerpt
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  excerpt: prismic.KeyTextField

  /**
   * Custom Tags field in *Post*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: post.custom_tags[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  custom_tags: prismic.GroupField<Simplify<PostDocumentDataCustomTagsItem>>

  /**
   * Slice Zone field in *Post*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: post.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<PostDocumentDataSlicesSlice> /**
   * Meta Description field in *Post*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: post.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_description: prismic.KeyTextField

  /**
   * Meta Image field in *Post*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: post.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>

  /**
   * Meta Title field in *Post*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: post.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_title: prismic.KeyTextField
}

/**
 * Post document from Prismic
 *
 * - **API ID**: `post`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type PostDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<Simplify<PostDocumentData>, 'post', Lang>

/**
 * Item in *Settings → Navigation*
 */
export interface SettingsDocumentDataNavigationItem {
  /**
   * Link field in *Settings → Navigation*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.navigation[].link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  link: prismic.LinkField

  /**
   * Label field in *Settings → Navigation*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.navigation[].label
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  label: prismic.KeyTextField
}

/**
 * Content for Settings documents
 */
interface SettingsDocumentData {
  /**
   * Domain field in *Settings*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.domain
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  domain: prismic.KeyTextField

  /**
   * Site Title field in *Settings*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.site_title
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  site_title: prismic.KeyTextField

  /**
   * Site Meta Description field in *Settings*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.site_meta_description
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  site_meta_description: prismic.KeyTextField

  /**
   * Site Meta Image field in *Settings*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.site_meta_image
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  site_meta_image: prismic.ImageField<never>

  /**
   * Navigation field in *Settings*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.navigation[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  navigation: prismic.GroupField<Simplify<SettingsDocumentDataNavigationItem>>

  /**
   * Facebook Page field in *Settings*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.facebook_page
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  facebook_page: prismic.LinkField

  /**
   * Mailerlite Group Id field in *Settings*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.mailerlite_group_id
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  mailerlite_group_id: prismic.KeyTextField
}

/**
 * Settings document from Prismic
 *
 * - **API ID**: `settings`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type SettingsDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<
    Simplify<SettingsDocumentData>,
    'settings',
    Lang
  >

/**
 * Content for Tag documents
 */
interface TagDocumentData {
  /**
   * Title field in *Tag*
   *
   * - **Field Type**: Title
   * - **Placeholder**: *None*
   * - **API ID Path**: tag.title
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  title: prismic.TitleField

  /**
   * Meta Description field in *Tag*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: tag.meta_description
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_description: prismic.KeyTextField
}

/**
 * Tag document from Prismic
 *
 * - **API ID**: `tag`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type TagDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<Simplify<TagDocumentData>, 'tag', Lang>

/**
 * Content for Testimonial documents
 */
interface TestimonialDocumentData {
  /**
   * Attribution field in *Testimonial*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: testimonial.attribution
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  attribution: prismic.KeyTextField

  /**
   * Text field in *Testimonial*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: testimonial.text
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  text: prismic.RichTextField

  /**
   * Image field in *Testimonial*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: testimonial.image
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>
}

/**
 * Testimonial document from Prismic
 *
 * - **API ID**: `testimonial`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type TestimonialDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<
    Simplify<TestimonialDocumentData>,
    'testimonial',
    Lang
  >

export type AllDocumentTypes =
  | HomepageDocument
  | PageDocument
  | PostDocument
  | SettingsDocument
  | TagDocument
  | TestimonialDocument

/**
 * Primary content in *Carousel → Primary*
 */
export interface CarouselSliceDefaultPrimary {
  /**
   * Heading field in *Carousel → Primary*
   *
   * - **Field Type**: Title
   * - **Placeholder**: Optional section heading
   * - **API ID Path**: carousel.primary.heading
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  heading: prismic.TitleField

  /**
   * Description field in *Carousel → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: Option section description
   * - **API ID Path**: carousel.primary.description
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  description: prismic.RichTextField
}

/**
 * Primary content in *Carousel → Items*
 */
export interface CarouselSliceDefaultItem {
  /**
   * Testimonial field in *Carousel → Items*
   *
   * - **Field Type**: Content Relationship
   * - **Placeholder**: *None*
   * - **API ID Path**: carousel.items[].testimonial
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  testimonial: prismic.ContentRelationshipField<'testimonial'>
}

/**
 * Default variation for Carousel Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type CarouselSliceDefault = prismic.SharedSliceVariation<
  'default',
  Simplify<CarouselSliceDefaultPrimary>,
  Simplify<CarouselSliceDefaultItem>
>

/**
 * Slice variation for *Carousel*
 */
type CarouselSliceVariation = CarouselSliceDefault

/**
 * Carousel Shared Slice
 *
 * - **API ID**: `carousel`
 * - **Description**: Carousel
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type CarouselSlice = prismic.SharedSlice<
  'carousel',
  CarouselSliceVariation
>

/**
 * Primary content in *Content → Primary*
 */
export interface ContentSliceDefaultPrimary {
  /**
   * Content field in *Content → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: content.primary.content
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  content: prismic.RichTextField
}

/**
 * Default variation for Content Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ContentSliceDefault = prismic.SharedSliceVariation<
  'default',
  Simplify<ContentSliceDefaultPrimary>,
  never
>

/**
 * Slice variation for *Content*
 */
type ContentSliceVariation = ContentSliceDefault

/**
 * Content Shared Slice
 *
 * - **API ID**: `content`
 * - **Description**: Content
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ContentSlice = prismic.SharedSlice<'content', ContentSliceVariation>

/**
 * Primary content in *Hero → Primary*
 */
export interface HeroSliceDefaultPrimary {
  /**
   * Heading field in *Hero → Primary*
   *
   * - **Field Type**: Title
   * - **Placeholder**: Hero heading
   * - **API ID Path**: hero.primary.heading
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  heading: prismic.TitleField

  /**
   * Description field in *Hero → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: Optionally describe your CTA
   * - **API ID Path**: hero.primary.description
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  description: prismic.RichTextField

  /**
   * Button Link field in *Hero → Primary*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.primary.button_link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  button_link: prismic.LinkField

  /**
   * Button Text field in *Hero → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.primary.button_text
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  button_text: prismic.KeyTextField

  /**
   * Background Image field in *Hero → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.primary.background_image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  background_image: prismic.ImageField<never>

  /**
   * Image Location field in *Hero → Primary*
   *
   * - **Field Type**: Boolean
   * - **Placeholder**: *None*
   * - **Default Value**: false
   * - **API ID Path**: hero.primary.image_location
   * - **Documentation**: https://prismic.io/docs/field#boolean
   */
  image_location: prismic.BooleanField
}

/**
 * Default variation for Hero Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HeroSliceDefault = prismic.SharedSliceVariation<
  'default',
  Simplify<HeroSliceDefaultPrimary>,
  never
>

/**
 * Slice variation for *Hero*
 */
type HeroSliceVariation = HeroSliceDefault

/**
 * Hero Shared Slice
 *
 * - **API ID**: `hero`
 * - **Description**: Hero
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HeroSlice = prismic.SharedSlice<'hero', HeroSliceVariation>

/**
 * Primary content in *ImageWithText → Primary*
 */
export interface ImageWithTextSliceDefaultPrimary {
  /**
   * Image field in *ImageWithText → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: image_with_text.primary.image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>

  /**
   * Heading field in *ImageWithText → Primary*
   *
   * - **Field Type**: Title
   * - **Placeholder**: Optional heading for section
   * - **API ID Path**: image_with_text.primary.heading
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  heading: prismic.TitleField

  /**
   * Text field in *ImageWithText → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: image_with_text.primary.text
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  text: prismic.RichTextField

  /**
   * Image Location field in *ImageWithText → Primary*
   *
   * - **Field Type**: Boolean
   * - **Placeholder**: *None*
   * - **Default Value**: true
   * - **API ID Path**: image_with_text.primary.image_location
   * - **Documentation**: https://prismic.io/docs/field#boolean
   */
  image_location: prismic.BooleanField
}

/**
 * Default variation for ImageWithText Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ImageWithTextSliceDefault = prismic.SharedSliceVariation<
  'default',
  Simplify<ImageWithTextSliceDefaultPrimary>,
  never
>

/**
 * Slice variation for *ImageWithText*
 */
type ImageWithTextSliceVariation = ImageWithTextSliceDefault

/**
 * ImageWithText Shared Slice
 *
 * - **API ID**: `image_with_text`
 * - **Description**: ImageWithText
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ImageWithTextSlice = prismic.SharedSlice<
  'image_with_text',
  ImageWithTextSliceVariation
>

/**
 * Primary content in *Newsletter → Primary*
 */
export interface NewsletterSliceDefaultPrimary {
  /**
   * Title field in *Newsletter → Primary*
   *
   * - **Field Type**: Title
   * - **Placeholder**: Enter a heading
   * - **API ID Path**: newsletter.primary.title
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  title: prismic.TitleField

  /**
   * Description field in *Newsletter → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: Describe the newsletter
   * - **API ID Path**: newsletter.primary.description
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  description: prismic.RichTextField

  /**
   * Form Location field in *Newsletter → Primary*
   *
   * - **Field Type**: Boolean
   * - **Placeholder**: *None*
   * - **Default Value**: true
   * - **API ID Path**: newsletter.primary.form_location
   * - **Documentation**: https://prismic.io/docs/field#boolean
   */
  form_location: prismic.BooleanField

  /**
   * First Name Placeholder Text field in *Newsletter → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: newsletter.primary.first_name_placeholder_text
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  first_name_placeholder_text: prismic.KeyTextField

  /**
   * Email Placeholder Text field in *Newsletter → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: newsletter.primary.email_placeholder_text
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  email_placeholder_text: prismic.KeyTextField

  /**
   * Button Text field in *Newsletter → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: newsletter.primary.button_text
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  button_text: prismic.KeyTextField

  /**
   * Button Color field in *Newsletter → Primary*
   *
   * - **Field Type**: Select
   * - **Placeholder**: Select a button color
   * - **Default Value**: Primary
   * - **API ID Path**: newsletter.primary.button_color
   * - **Documentation**: https://prismic.io/docs/field#select
   */
  button_color: prismic.SelectField<
    'Primary' | 'Secondary' | 'Accent' | 'Neutral' | 'Base',
    'filled'
  >
}

/**
 * Default variation for Newsletter Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type NewsletterSliceDefault = prismic.SharedSliceVariation<
  'default',
  Simplify<NewsletterSliceDefaultPrimary>,
  never
>

/**
 * Slice variation for *Newsletter*
 */
type NewsletterSliceVariation = NewsletterSliceDefault

/**
 * Newsletter Shared Slice
 *
 * - **API ID**: `newsletter`
 * - **Description**: Newsletter
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type NewsletterSlice = prismic.SharedSlice<
  'newsletter',
  NewsletterSliceVariation
>

/**
 * Primary content in *Steps → Primary*
 */
export interface StepsSliceDefaultPrimary {
  /**
   * Background Image field in *Steps → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: steps.primary.background_image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  background_image: prismic.ImageField<never>
}

/**
 * Primary content in *Steps → Items*
 */
export interface StepsSliceDefaultItem {
  /**
   * Step Sequence Override field in *Steps → Items*
   *
   * - **Field Type**: Text
   * - **Placeholder**: Optionally override numbers
   * - **API ID Path**: steps.items[].step_sequence_override
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  step_sequence_override: prismic.KeyTextField

  /**
   * Step Title field in *Steps → Items*
   *
   * - **Field Type**: Title
   * - **Placeholder**: *None*
   * - **API ID Path**: steps.items[].step_title
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  step_title: prismic.TitleField

  /**
   * Step Text field in *Steps → Items*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: steps.items[].step_text
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  step_text: prismic.RichTextField

  /**
   * Link field in *Steps → Items*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: steps.items[].link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  link: prismic.LinkField

  /**
   * Link Text field in *Steps → Items*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: steps.items[].link_text
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  link_text: prismic.KeyTextField
}

/**
 * Default variation for Steps Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type StepsSliceDefault = prismic.SharedSliceVariation<
  'default',
  Simplify<StepsSliceDefaultPrimary>,
  Simplify<StepsSliceDefaultItem>
>

/**
 * Slice variation for *Steps*
 */
type StepsSliceVariation = StepsSliceDefault

/**
 * Steps Shared Slice
 *
 * - **API ID**: `steps`
 * - **Description**: Steps
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type StepsSlice = prismic.SharedSlice<'steps', StepsSliceVariation>

declare module '@prismicio/client' {
  interface CreateClient {
    (
      repositoryNameOrEndpoint: string,
      options?: prismic.ClientConfig,
    ): prismic.Client<AllDocumentTypes>
  }

  namespace Content {
    export type {
      HomepageDocument,
      HomepageDocumentData,
      HomepageDocumentDataSlicesSlice,
      PageDocument,
      PageDocumentData,
      PageDocumentDataSlicesSlice,
      PostDocument,
      PostDocumentData,
      PostDocumentDataCustomTagsItem,
      PostDocumentDataSlicesSlice,
      SettingsDocument,
      SettingsDocumentData,
      SettingsDocumentDataNavigationItem,
      TagDocument,
      TagDocumentData,
      TestimonialDocument,
      TestimonialDocumentData,
      AllDocumentTypes,
      CarouselSlice,
      CarouselSliceDefaultPrimary,
      CarouselSliceDefaultItem,
      CarouselSliceVariation,
      CarouselSliceDefault,
      ContentSlice,
      ContentSliceDefaultPrimary,
      ContentSliceVariation,
      ContentSliceDefault,
      HeroSlice,
      HeroSliceDefaultPrimary,
      HeroSliceVariation,
      HeroSliceDefault,
      ImageWithTextSlice,
      ImageWithTextSliceDefaultPrimary,
      ImageWithTextSliceVariation,
      ImageWithTextSliceDefault,
      NewsletterSlice,
      NewsletterSliceDefaultPrimary,
      NewsletterSliceVariation,
      NewsletterSliceDefault,
      StepsSlice,
      StepsSliceDefaultPrimary,
      StepsSliceDefaultItem,
      StepsSliceVariation,
      StepsSliceDefault,
    }
  }
}
