import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import SunnyIcon from '@mui/icons-material/Sunny';

import './InfoBox.css';

export default function InfoBox({ info }) {

    const RAIN = "https://images.unsplash.com/photo-1438449805896-28a666819a20?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cmFpbiUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";

    const HOT = "https://images.unsplash.com/photo-1524594081293-190a2fe0baae?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG90JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D"

    const COLD = "https://plus.unsplash.com/premium_photo-1664301524345-90a694774519?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

    const INIT = "https://media.istockphoto.com/id/1007768414/photo/blue-sky-with-bright-sun-and-clouds.jpg?s=612x612&w=0&k=20&c=MGd2-v42lNF7Ie6TtsYoKnohdCfOPFSPQt5XOz4uOy4="
    // 🛑 Prevent undefined error

    let weatherText = info.weather?.toLowerCase();

    let image =
        weatherText?.includes("rain")
            ? RAIN
            : weatherText?.includes("sun")
                ? HOT
                : weatherText?.includes("cloud")
                    ? COLD
                    : COLD;

    if (!info) {
        return <h3>Loading...</h3>;
    }

    return (
        <Card sx={{ maxWidth: 345 }} className="card">
            <CardMedia
                sx={{ height: 140 }}

                image={image}



                title="weather image"
            />

            <CardContent>

                <Typography gutterBottom variant="h4" component="div">
                    {info.city}{
                        weatherText?.includes("rain")
                            ? <ThunderstormIcon />
                            : weatherText?.includes("sun")
                                ? <SunnyIcon/>
                                : weatherText?.includes("cloud")
                                    ? COLD
                                    : <AcUnitIcon />

          }
                </Typography>

                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    Region: {info.region}
                </Typography>

                <Typography variant="body2">
                    Humidity: {info.humidity}%
                </Typography>

                <Typography variant="body2">
                    Temperature: {info.temp}°C
                </Typography>

                <Typography variant="body2">
                    The weather can be described as{" "}
                    <i>{info.weather}</i> and feels like {info.feelsLike}°C
                </Typography>

            </CardContent>

            <CardActions>
            </CardActions>

        </Card>
    );
}
