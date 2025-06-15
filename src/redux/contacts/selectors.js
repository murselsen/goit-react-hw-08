export const selectIsLoading = state => state.contacts.isLoading;
export const selectError = state => state.contacts.error;
export const selectContacts = state => {
	const contacts = Array.isArray(state.contacts.items)
		? state.contacts.items
		: [];
	const filterType = state.filters.type
		? state.filters.type.toLowerCase()
		: '';
	const filterValue = state.filters.value
		? state.filters.value.toLowerCase()
		: '';

	switch (filterType) {
		case 'name':
			return filterValue !== ''
				? contacts.filter(
						contact =>
							contact.name &&
							contact.name.toLowerCase().includes(filterValue)
				  )
				: contacts;
		case 'number':
			return filterValue !== ''
				? contacts.filter(
						contact =>
							contact.number &&
							contact.number.toLowerCase().includes(filterValue)
				  )
				: contacts;
		default:
			return contacts;
	}
};
