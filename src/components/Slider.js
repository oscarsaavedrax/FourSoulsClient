import ReactSlider from "react-slider";
import './Slider.css';
const Slider = () => {
    return (
        <ReactSlider
            className="SliderName"
            thumbActiveClassName="SliderThumb"
            trackClassName="SliderTrack"
            //renderThumb={(props, state) => <div {...props}>{state.valueNow}</div>} //shows number value to slider
            />
            
    );
};
export default Slider;