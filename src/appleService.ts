export class appleService {
    private static appleApi: string = "https://itunes.apple.com/search?term=";

    public static getFirstFiveSongs(inputText: string): Promise<any> {
        return new Promise((resolve, reject) => {
            fetch(`${this.appleApi}${inputText}`)
                .then(res => res.json())
                .then((data: Record<string, any>) => {
                    let dataResults = data.results.filter((song: any) => song.trackName);
                    dataResults.sort((song1: any, song2: any) => song1.collectionName < song2.collectionName);
                    let items = dataResults.slice(0, 5).map((song: any) => song.trackName);
                    resolve(items);
                })
                .catch(reject);
        });
    }
}