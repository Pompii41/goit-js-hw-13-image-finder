

const token = "18653126-6e1e90df42866e268e88bd701"
const headers = {
  Avthorizations:"bearer(${token})"
}
function FetchContact  () {
  const url = "https://pixabay.com/api/"
 return fetch("url",headers)
    .then(resp => resp.json())
    .then(data => (data));
}
export default { FetchContact }