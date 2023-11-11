import './DestinationMenu.css';
import { Link } from 'react-router-dom';

const ContinentsData = [
    {
        id:1,
        continent: "Europe",
        countries: ["Azores", "Croatia", "Georgia", "Germany", "Greece", "Iceland", "Ireland", "Italy", "Portugal", "Scotland", "Spain", "United Kingdom"]
    },
    {
        id: 2,
        continent: "Asia",
        countries: ["Cambodia", "China" , "India", "Indonesia", "Japan", "Jordan", "South Korea", "Sri Lanka", "Taiwan", "Thailand", "Turkey", "Vietnam"]
    },
    {
        id: 3,
        continent: "Africa",
        countries: ["Egypt", "Ethiopia", "Kenya", "Ghana", "Madagascar", "Mauritius", "Morocco", "Namibia", "Rwanda", "South Africa", "Uganda", "Tanzania & Zanzibar"]
    },
    {
        id : 4,
        continent: "C/America",
        countries: ["Belize", "Costa Rica", "Cuba", "Dominican Republic", "Guatemala", "Honduras", "Jamaica","Nicaragua", "Mexico", "Panama", "Puerto Rico", "Trinidad and Tobago"]
    },
    {
        id : 5,
        continent: "S/America",
        countries: ["Argentina", "Bolivia", "Brazil", "Chile", "Colombia", "Ecuador", "Peru"]
    }
]

export function DestinationMenu() {
    const continentMenuItems = ContinentsData.map((item)=>(
        <ContinentSection continent={item.continent} key={item.id} countries={item.countries}/>
    ))
    return(
        <div className="destinations__section">
            <div className="destinations__container">
                {continentMenuItems}
            </div>
        </div>
    )
}
function ContinentSection({ continent, countries }) {
    return (
        <div className="continent_section">
            <h3>{continent}</h3>
            <ul>
                {countries.map((item, index) => (
                    <li key={index}>
                        <Link className="list_item">{item}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}