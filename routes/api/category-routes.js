const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  // find all categories
  const categoryData = await Category.findAll(
    // include its associated Products
    {
      include: [Product]
    }
  );
  return res.json(categoryData);
});

router.get('/:id', async (req, res) => {
  // find one category by its `id` value
  const categoryData = await Category.findOne(
    {
      where: {
        id: req.params.id
      }, 
      // include its associated Products
      include: [Product]
    }
  );
  return res.json(categoryData);
});

router.post('/', async (req, res) => {
  // create a new category
  const categoryData = await Category.create(req.body);
  return res.json(categoryData);
});

router.put('/:id', async (req, res) => {
  // update a category by its `id` value
  const categoryData = await Category.update(
    {
      category_name: req.body.category_name
    },
    {
      where: {
        id: req.params.id
      }
    }
  )
  return res.json(categoryData);
});

router.delete('/:id', async (req, res) => {
  // delete a category by its `id` value
  const categoryData = await Category.destroy(
    {
      where: {
        id: req.params.id
      }
    }
  );
  return res.json(categoryData);
});

module.exports = router;