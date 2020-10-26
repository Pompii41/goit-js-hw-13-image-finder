class ApiService {
  constructor(searchQuery = '', page = 1) {
    this.searchQuery = searchQuery;
    this.page = page;
  }

  getImages() {
    const apiKey = '18653126-6e1e90df42866e268e88bd701';
    const baseUrl =
      'https://pixabay.com/api/?image_type=all&colors=green&min_height=100&orientation=horizontal&';
    const url = `${baseUrl}q=${this.searchQuery}&page=${this.page}&per_page=12&key=${apiKey}`;

    return fetch(url)
      .then(resp => resp.json())
      .then(({ hits }) => {
        this._incremetPage();
        return hits;
      })
      .catch(error => console.log(error));
  }

  _incremetPage() {
    this.page += 1; 
  }
  resetPage() {
    this.page = 1;
  }
  get query() {
    return this.searchQuery;
  }
  set setQuery(newQuery) {
    this.searchQuery = newQuery; 
  }
}

const apiService = new ApiService();
export default apiService;
