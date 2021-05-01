import {
  chakra,
  Button,
  Box,
  Input,
} from '@chakra-ui/react'
import { Formik } from 'formik'

import GamesList from './GamesList'

const Home = ({ data, error, onSearch }) => (
  <Box p={4}>
    <Formik
      initialValues={{ search: '' }}
      onSubmit={onSearch}
    >
      {({
        values,
        handleChange,
        handleSubmit,
      }) => (
        <chakra.form display="flex" width="100%" onSubmit={handleSubmit}>
          <Input
            name="search"
            placeholder="Search game"
            variant="filled"
            onChange={handleChange}
            value={values.search}
          />
          <Button ml={4} type="submit">Search</Button>
        </chakra.form>
      )}
    </Formik>
    <GamesList data={data} error={error} />
  </Box>
)

export default Home
