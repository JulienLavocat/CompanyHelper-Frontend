const HOST = process.env.NEXT_PUBLIC_API_HOST;

const getJson = async (url: string) => (await fetch(`${HOST}${url}`)).json();

export class API {
	static async searchItemsByName(name: string) {
		return getJson(`/items/search?query=${name}`);
	}
}
