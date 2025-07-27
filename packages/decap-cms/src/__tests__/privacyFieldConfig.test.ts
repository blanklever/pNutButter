import { withPrivacyFields, privacyFieldConfig } from '../index';

describe('Decap CMS Privacy Field Integration', () => {
  it('should add privacy field to collection config', () => {
    const collection = { name: 'posts', fields: [{ name: 'title', widget: 'string' }] };
    const updated = withPrivacyFields(collection);
    expect(updated.fields.some((f: any) => f.name === 'privacy')).toBe(true);
    expect(updated.fields.find((f: any) => f.name === 'privacy')).toMatchObject(privacyFieldConfig());
  });

  it('should not duplicate privacy field if already present', () => {
    const collection = { name: 'posts', fields: [privacyFieldConfig()] };
    const updated = withPrivacyFields(collection);
    const privacyFields = updated.fields.filter((f: any) => f.name === 'privacy');
    expect(privacyFields.length).toBe(1);
  });
});
