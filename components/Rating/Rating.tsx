import { RatingProps } from "./Rating.props.";
import styles from './Rating.module.scss';
import cn from 'classnames';

import { useEffect, useState } from 'react';

export const Rating = ({ isEditable = false, rating, setRating, ...props }: RatingProps): JSX.Element => {
    const [ratingArray, setRatingArray] = useState<JSX.Element[]>(new Array(5).fill(<></>));

    useEffect(() => {
        constructRating(rating);
    }, [rating]);

    const constructRating = (currentRating: number) => {
        const updatedArray = ratingArray.map((r: JSX.Element, i: number) => {
            return (
                <img
                    className={cn(styles.star, {
                        [styles.filled]: i < currentRating
                    })}
                    src="./star.svg"
                    alt='star'
                />
            );
        });
        setRatingArray(updatedArray);
    };

    return (
        <div {...props}>
            {ratingArray.map((r, i) => (<span key={i}>{r}</span>))}
        </div>
    );
};
