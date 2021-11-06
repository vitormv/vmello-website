declare module 'src/data/contact-info.yml' {
  export type ContactInfoItemType = {
    name: string;
    value: string;
  };

  export type ContactInfoType = {
    slug: string;
    items: ContactInfoItemType[];
  };

  const content: ContactInfoType;
  export default content;
}
