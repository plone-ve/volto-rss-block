import React from 'react';
import PropTypes from 'prop-types';
import { injectIntl } from 'react-intl';
import moment from 'moment';

const CardWithoutImageRssTemplate = ({ item }) => {
    return (
        <div className="col-12 col-lg-3">
            <div className="card-wrapper">
                <div className="card">
                    <div className="card-body">
                        <div className="category-top">
                            {item.categories.length > 0 ? (
                                <a className="category">
                                    {item.categories[0]._}
                                </a>
                            ) : ''
                            }
                            <span className="data">{moment(item.pubDate).format('DD-MMM-Y')}</span>
                        </div>
                        <h5 className="big-heading card-title">{item.title}</h5>
                        <p className="text-serif card-text">{item.contentSnippet}</p>
                    </div>
                    <a className="read-more" href={item?.link}>
                        <span className="text">Leggi di più</span>
                    </a>
                </div>
            </div>
        </div >
    );
};
CardWithoutImageRssTemplate.propTypes = {
    item: PropTypes.object,
};

export default injectIntl(CardWithoutImageRssTemplate);
