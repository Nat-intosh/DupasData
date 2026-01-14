import type { Schema, Struct } from '@strapi/strapi';

export interface SharedMedia extends Struct.ComponentSchema {
  collectionName: 'components_shared_media';
  info: {
    displayName: 'Media';
    icon: 'file-video';
  };
  attributes: {
    file: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
  };
}

export interface SharedQuote extends Struct.ComponentSchema {
  collectionName: 'components_shared_quotes';
  info: {
    displayName: 'Quote';
    icon: 'indent';
  };
  attributes: {
    body: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SharedRichText extends Struct.ComponentSchema {
  collectionName: 'components_shared_rich_texts';
  info: {
    description: '';
    displayName: 'Rich text';
    icon: 'align-justify';
  };
  attributes: {
    body: Schema.Attribute.RichText;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    description: '';
    displayName: 'Seo';
    icon: 'allergies';
    name: 'Seo';
  };
  attributes: {
    metaDescription: Schema.Attribute.Text & Schema.Attribute.Required;
    metaTitle: Schema.Attribute.String & Schema.Attribute.Required;
    shareImage: Schema.Attribute.Media<'images'>;
  };
}

export interface SharedSlider extends Struct.ComponentSchema {
  collectionName: 'components_shared_sliders';
  info: {
    description: '';
    displayName: 'Slider';
    icon: 'address-book';
  };
  attributes: {
    files: Schema.Attribute.Media<'images', true>;
  };
}

export interface Shared2Artwork extends Struct.ComponentSchema {
  collectionName: 'components_shared2_artworks';
  info: {
    displayName: 'artwork';
    icon: 'brush';
  };
  attributes: {
    description: Schema.Attribute.String;
    image: Schema.Attribute.Component<'shared2.images', true>;
    name: Schema.Attribute.String;
    year: Schema.Attribute.Integer;
  };
}

export interface Shared2Crop extends Struct.ComponentSchema {
  collectionName: 'components_shared2_crops';
  info: {
    displayName: 'crop';
    icon: 'collapse';
  };
  attributes: {
    description: Schema.Attribute.Text;
    url: Schema.Attribute.Text;
  };
}

export interface Shared2Images extends Struct.ComponentSchema {
  collectionName: 'components_shared2_images';
  info: {
    displayName: 'images';
    icon: 'play';
  };
  attributes: {
    copyright: Schema.Attribute.String;
    crop: Schema.Attribute.Component<'shared2.crop', true>;
    description: Schema.Attribute.Text;
    name: Schema.Attribute.String;
    url: Schema.Attribute.Text;
  };
}

export interface Shared2Museum extends Struct.ComponentSchema {
  collectionName: 'components_shared2_museums';
  info: {
    displayName: 'museum';
    icon: 'alien';
  };
  attributes: {
    adress: Schema.Attribute.String;
    artwork: Schema.Attribute.Component<'shared2.artwork', true>;
    name: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'shared.media': SharedMedia;
      'shared.quote': SharedQuote;
      'shared.rich-text': SharedRichText;
      'shared.seo': SharedSeo;
      'shared.slider': SharedSlider;
      'shared2.artwork': Shared2Artwork;
      'shared2.crop': Shared2Crop;
      'shared2.images': Shared2Images;
      'shared2.museum': Shared2Museum;
    }
  }
}
