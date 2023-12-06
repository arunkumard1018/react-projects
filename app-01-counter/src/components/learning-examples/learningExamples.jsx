

const person = {
    name: "Aruna",
    address: {
        village: "Lingadahalli",
        city: "davanagere",
        pin: 577002,
    },
    profiles: ["twitter", "facebook", "linkdin"],

    printprofile: () => {
        person.profiles.map(
            profiles => console.log(profiles)
        )
    },

}




export default function LearningJavaScript() {
    return (
        <div className="LearningJavaScript">
            LearningJavaScript
            <h1>Hello {person.name} </h1>
            <h1>Address: {person.address.village} {person.address.city} {person.address.pin}</h1>
            <p>Profiles : {person.profiles[0]},{person.profiles[1]},{person.profiles[2]} </p>
            <button onClick={person.printprofile}>Click to print Social medial Details in console</button>
            
        </div>
    )
}