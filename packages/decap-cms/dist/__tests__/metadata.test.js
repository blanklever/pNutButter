import { getPrivacyFromEntry, setPrivacyForEntry } from '../metadata';
describe('Decap CMS Privacy Metadata', () => {
    it('should return public by default', () => {
        expect(getPrivacyFromEntry({ data: {} })).toBe('public');
    });
    it('should return private if set', () => {
        expect(getPrivacyFromEntry({ data: { privacy: 'private' } })).toBe('private');
    });
    it('should set privacy on entry', () => {
        const entry = { data: {} };
        setPrivacyForEntry(entry, 'private');
        expect(entry.data.privacy).toBe('private');
    });
});
