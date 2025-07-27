import { getPrivacyFromEntry } from '../metadata';

describe('Decap CMS Privacy Metadata Edge Cases', () => {
  it('should return public if entry is null', () => {
    expect(getPrivacyFromEntry(null)).toBe('public');
  });
  it('should return public if entry.data is missing', () => {
    expect(getPrivacyFromEntry({})).toBe('public');
  });
  it('should return public if privacy field is malformed', () => {
    expect(getPrivacyFromEntry({ data: { privacy: 123 } })).toBe('public');
  });
});
