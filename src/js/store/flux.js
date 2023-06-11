const getState = ({ getStore, getActions, setStore }) => {
	function getData() {
		fetch("https://assets.breatheco.de/apis/fake/contact/agenda/sol_15", {
			method: "GET",
			headers: {
			"Content-Type": "application/json"
			},
			})
				.then(resp => resp.json())
				.then(data => setStore({ contacts: data }))
				.catch(error => console.log(error));
			}
	
	return {
		store: {
			contacts: [],
		},
		actions: {
			getContacts: () => {
				const store = getStore();
				fetch("https://assets.breatheco.de/apis/fake/contact/agenda/sol_15", {
					method: "GET",
					headers: {
					"Content-Type": "application/json"
					}
					})
					.then(resp => resp.json())
					.then(data => setStore({ contacts: data }))
					.catch(error => console.log(error));
			},

			submitContact: (newContact) => {
			fetch("https://assets.breatheco.de/apis/fake/contact/", {
				method: "POST",
				body: JSON.stringify(newContact),
				headers: {
				  "Content-Type": "application/json",
				},
			  })
			    
			  .then(response=>response.status === 200 ? getData():"")
			  .catch((error) => console.log("error", error));
			},

			deleteContact: (id) => {
				fetch('https://assets.breatheco.de/apis/fake/contact/' + id , {
					method: "DELETE",
					headers: {
						"Content-Type": "application/json",
					  },
				})
					.then(resp => resp.json())
					.then(data => {
						console.log(data); 
						getData();
				})
					.catch(error => console.log(error));
			},

			editContact: (contact, id) => {
				fetch('https://assets.breatheco.de/apis/fake/contact/' + id , {
					method: "PUT",
					body: JSON.stringify(contact),
					headers: {
					  "Content-Type": "application/json",
					},
				})
					.then(resp => resp.json())
					.then(data => {
						console.log(data); 
						getData();
				})
					.catch(error => console.log(error));
			}
		}
	};
}	

export default getState;