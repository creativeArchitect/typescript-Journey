
interface config {
	endpoint: string;
	apiKey: string;
}
// interface config {
// 	readonly endpoint: string;
// 	readonly apiKey: string;
// }

const config: Config = {
    endpoint: 'https://api.example.com',
    apiKey: "xyz12#74"
}

// const config: Readonly<Config> = {
//     endpoint: 'https://api.example.com',
//     apiKey: "xyz12#74"
// }

config.apiKey = "JohnNahiBanegaDON#74";











   