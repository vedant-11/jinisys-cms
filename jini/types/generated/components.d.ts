import type { Schema, Struct } from '@strapi/strapi';

export interface SharedActivities extends Struct.ComponentSchema {
  collectionName: 'components_shared_activities';
  info: {
    displayName: 'activities';
  };
  attributes: {
    text: Schema.Attribute.String;
  };
}

export interface SharedAdvantage extends Struct.ComponentSchema {
  collectionName: 'components_shared_advantages';
  info: {
    displayName: 'advantage';
  };
  attributes: {
    text: Schema.Attribute.String;
  };
}

export interface SharedClientList extends Struct.ComponentSchema {
  collectionName: 'components_shared_client_lists';
  info: {
    displayName: 'clientList';
  };
  attributes: {
    logo: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    name: Schema.Attribute.String;
  };
}

export interface SharedClients extends Struct.ComponentSchema {
  collectionName: 'components_shared_clients';
  info: {
    displayName: 'clients';
  };
  attributes: {
    logo: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    name: Schema.Attribute.String;
  };
}

export interface SharedHomeServices extends Struct.ComponentSchema {
  collectionName: 'components_shared_home_services';
  info: {
    displayName: 'HomeServices';
  };
  attributes: {
    badge: Schema.Attribute.String;
    body: Schema.Attribute.String;
    services: Schema.Attribute.Component<'shared.services', true>;
    title: Schema.Attribute.String;
  };
}

export interface SharedIndustry extends Struct.ComponentSchema {
  collectionName: 'components_shared_industries';
  info: {
    displayName: 'industry';
  };
  attributes: {
    name: Schema.Attribute.String;
  };
}

export interface SharedLandingService extends Struct.ComponentSchema {
  collectionName: 'components_shared_landing_services';
  info: {
    displayName: 'landing-service';
  };
  attributes: {
    badge: Schema.Attribute.String;
    description: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface SharedLandingservice extends Struct.ComponentSchema {
  collectionName: 'components_shared_landingservices';
  info: {
    displayName: 'landingservice';
  };
  attributes: {
    description: Schema.Attribute.String;
    icon: Schema.Attribute.String;
    link: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

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

export interface SharedMilestoneCard extends Struct.ComponentSchema {
  collectionName: 'components_shared_milestone_cards';
  info: {
    displayName: 'milestone_card';
  };
  attributes: {
    milestone_body: Schema.Attribute.String;
    milestone_icon: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    milestone_number: Schema.Attribute.String;
    milestone_pic: Schema.Attribute.String;
    milestone_suffix: Schema.Attribute.String;
    milestone_title: Schema.Attribute.String;
  };
}

export interface SharedNavbarlinks extends Struct.ComponentSchema {
  collectionName: 'components_shared_navbarlinks';
  info: {
    displayName: 'navbarlinks';
  };
  attributes: {
    label: Schema.Attribute.String;
    url: Schema.Attribute.String;
  };
}

export interface SharedPhase extends Struct.ComponentSchema {
  collectionName: 'components_shared_phases';
  info: {
    displayName: 'phase';
  };
  attributes: {
    activities: Schema.Attribute.Component<'shared.activities', true>;
    description: Schema.Attribute.String;
    icon: Schema.Attribute.String;
    number: Schema.Attribute.String;
    title: Schema.Attribute.String;
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

export interface SharedServices extends Struct.ComponentSchema {
  collectionName: 'components_shared_services';
  info: {
    displayName: 'services';
  };
  attributes: {
    description: Schema.Attribute.String;
    icon: Schema.Attribute.String;
    link: Schema.Attribute.String;
    title: Schema.Attribute.String;
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

export interface SharedValuesCard extends Struct.ComponentSchema {
  collectionName: 'components_shared_values_cards';
  info: {
    displayName: 'valuesCard';
  };
  attributes: {
    description: Schema.Attribute.String;
    icon: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'shared.activities': SharedActivities;
      'shared.advantage': SharedAdvantage;
      'shared.client-list': SharedClientList;
      'shared.clients': SharedClients;
      'shared.home-services': SharedHomeServices;
      'shared.industry': SharedIndustry;
      'shared.landing-service': SharedLandingService;
      'shared.landingservice': SharedLandingservice;
      'shared.media': SharedMedia;
      'shared.milestone-card': SharedMilestoneCard;
      'shared.navbarlinks': SharedNavbarlinks;
      'shared.phase': SharedPhase;
      'shared.quote': SharedQuote;
      'shared.rich-text': SharedRichText;
      'shared.seo': SharedSeo;
      'shared.services': SharedServices;
      'shared.slider': SharedSlider;
      'shared.values-card': SharedValuesCard;
    }
  }
}
