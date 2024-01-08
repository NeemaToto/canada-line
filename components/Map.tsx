import { MapContainer, TileLayer, Marker, Popup, Polyline } from "react-leaflet"
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'
import { allLines, mainLine, subLine } from '../data/stationCoords'

const icon = L.icon({ iconUrl: "images/train.svg", iconSize: [32, 32] })

const Map = () => {
    const mainLineColor = { color: '#001df5' }
    const subLineColor = { color: '#00b1fc' }

    return (
        <div className="w-10/12	">
        <MapContainer
            style={{ height: '85vh' }}
            center={[49.28570, -123.11178]} zoom={15} scrollWheelZoom={true}
        >
            <TileLayer
                attribution="&copy; <a href='https://github.com/NeemaToto/canada-line.git'> By Neema Totonchi</a> contributors"
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {
                allLines && allLines.map((line, index) => {
                    return (
                        <div key={index} >
                            <Marker position={line.coords} icon={icon} >
                                <Popup>
                                    {line.name}
                                </Popup>
                            </Marker>
                            <Polyline pathOptions={mainLineColor} positions={mainLine} />
                            <Polyline pathOptions={subLineColor} positions={subLine} />
                        </div>
                    )
                })
            }
        </MapContainer>
        </div>
    )
}

export default Map;