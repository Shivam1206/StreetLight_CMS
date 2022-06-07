module.exports.pagination = (query, count) => {
  const limit = query.limit ? Number(query.limit) : 10;
  const page = query.page ? Number(query.page) : 1;
  return {
    limit,
    page,
    skip: limit * (page - 1),
    totalPages: Math.ceil(count / limit),
  };
};
