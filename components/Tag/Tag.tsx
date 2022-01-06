import { PProps } from './Tag.props';
import styles from './Tag.module.scss';
import cn from 'classnames';

export const Tag = ({ size = 'small', children, color = 'ghost', href, className, ...props }: PProps): JSX.Element => {
    return (
        <div
            className={cn(styles.tag, className, {
                [styles.small]: size == 'small',
                [styles.medium]: size == 'medium',
                [styles.ghost]: color == 'ghost',
                [styles.red]: color == 'red',
                [styles.grey]: color == 'grey',
                [styles.green]: color == 'green',
                [styles.primary]: color == 'primary',
            })}
            {...props}
        >
            {
                href
                    ? <a href={href}>{children}</a>
                    : <>{children}</>
            }
        </div>
    );
};
