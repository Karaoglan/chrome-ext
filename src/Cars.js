import { useLiveQuery } from "dexie-react-hooks";
import { db } from "./config/db";

export default function Cars() {
    const cars = useLiveQuery(() => db.cars.toArray());

    return (
        <ul>
            {cars?.map((car) => (
                <li key={car.id}>
                    {car.id}, {car.make}, {car.modal}, {car.price}
                </li>
            ))}
        </ul>
    );
}
