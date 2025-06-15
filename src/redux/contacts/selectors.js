export const selectIsLoading = state => state.contacts.isLoading;
export const selectError = state => state.contacts.error;
export const selectContacts = state => {
	const contacts = state.contacts.items;
	const filterType = state.filters.type.toLowerCase();
	const filterValue = state.filters.value.toLowerCase();

	switch (filterType) {
		case 'name':
			return contacts.filter(contact =>
				contact.name.toLowerCase().includes(filterValue)
			);
		case 'number':
			return contacts.filter(contact =>
				contact.phone.toLowerCase().includes(filterValue)
			);
		default:
			return contacts;
	}
};
