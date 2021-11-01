import React from 'react';
import './KOLVideos.css';
import Data from '../../Data.json';
import { BsPlayFill } from 'react-icons/bs';

const KOLVidos = () => {
	return (
		<div className="kol_holder">
			<h2>KOL Videos - get expert insights here</h2>
			<p>See what Key opinion leaders have to say about their experiences with Adtralza® </p>
			<div className="kol_sections_holder">
				{Data.kol_videos.map((e) => (
					<section className="kol_box">
						{/* <img src={"./img/" + e.picture} alt="billede" className=""/> */}
						<div className="videobox">
							<div>
								<BsPlayFill className="play_icon" />
							</div>
						</div>
						<div className="kol_text">
							<h4 className="video_title">{e.video_title}</h4>
							<p>{e.text}</p>
						</div>
					</section>
				))}
			</div>
		</div>
	);
};

export default KOLVidos;
