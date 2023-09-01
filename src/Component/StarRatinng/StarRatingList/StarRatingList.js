import StarRatingItems from './StarRatingItems';
import { Fragment, useState } from 'react';

export default function StarRatingList({ maxRating, onGetUserRating }) {
    const [rating, setRating] = useState(0);
    const [tempoRating, setTempoRating] = useState(0);
    const handleRating = function (rating) {
        setRating(rating);
        onGetUserRating(rating);
    };
    return (
        <Fragment>
            <div className="flex items-center gap-5">
                <div className="flex items-center">
                    {Array.from({ length: maxRating }, (_, i) => (
                        <StarRatingItems
                            key={i}
                            full={
                                tempoRating
                                    ? tempoRating >= i + 1
                                    : rating >= i + 1
                            } // return boolean value
                            onRate={() => handleRating(i + 1)}
                            onHoverIn={() => setTempoRating(i + 1)}
                            onHoverOut={() => setTempoRating(0)}
                        />
                    ))}
                </div>
                <span
                    className={
                        rating > 0 || tempoRating > 0
                            ? 'visible text-yellow-400 text-xl'
                            : 'invisible'
                    }
                >
                    {tempoRating || rating}
                </span>
            </div>
        </Fragment>
    );
}
