export async function getUser(url) {
    const response = await fetch(url);
    const data = await response.json()
    const result = data.results[0];
    const { name, email, dob, location, phone, login, picture } = result
    const fullName = `${name.first} ${name.last}`
    const age = dob.age;
    const street = location.street.name;
    const password = login.password
    const image = picture.large;
    return {
        fullName, email, age, street, phone, password, image
    }
}