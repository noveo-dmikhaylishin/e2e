import { useEffect, useState } from 'react';
import { camelizeKeys } from 'humps';

/**
 * @typedef {Object} Meme
 * @property {string} submissionUrl
 * @property {string} submissionTitle
 * @property {string} created
 * @property {string} submissionId
 */

/**
 *
 * @param {number} page
 * @param {number} limit
 * @returns {{
 *   pagination: { totalPages: number, page: number },
 *   pending: boolean,
 *   memes: Meme[]
 * }}
 */
export const useMemes = ({ page = 1, limit = 10 } = {}) => {
  const [state, setState] = useState({
    memes: [],
    pagination: {
      page: 0,
      totalPages: 0,
    },
    pending: false,
  });

  useEffect(() => {
    const skip = limit * (page - 1);

    setState((prevState) => ({
      ...prevState,
      pending: true,
    }));

    fetch(`https://api.doge-meme.lol/v1/memes/?skip=${skip}&limit=${limit}`)
      .then((response) => response.json())
      .then(camelizeKeys)
      .then(({ data, total }) => {
        setState({
          pending: false,
          memes: data,
          pagination: {
            page,
            totalPages: Math.ceil(total / limit),
          },
        });
      });
  }, [page, limit]);

  return {
    memes: state.memes,
    pending: state.pending,
    pagination: state.pagination,
  };
};
