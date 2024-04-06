function objectValue() {
    const person = {
        firstName: "John",
        lastName: "Doe",
        id: 5566,
        fullName: function () {
            return this.firstName + " " + this.lastName;
        }
    };
    return document.getElementById("demo").innerHTML = person.fullName();
}