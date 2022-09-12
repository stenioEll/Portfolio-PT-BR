import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';

const SmoothScrollToTop = ({ history }) => {
    useEffect(() => {
        const unbindScroll = history.listen(() => {
            window.scrollTo({ top: 0, behavior: 'smooth' })
        })
        return () => {
            unbindScroll();
        }
    }, [])
    return null;
}
export default withRouter(SmoothScrollToTop);