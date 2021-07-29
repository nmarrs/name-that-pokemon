import PropTypes from 'prop-types'
import styled from '@emotion/styled'

const DataLabel = ({ dataLabelText, dataText }) => {
  return (
    <>
      <DataLabelText data-testid="dataLabelText">{dataLabelText}</DataLabelText>
      <DataText data-testid="dataText">{dataText}</DataText>
    </>
  )
}

DataLabel.propTypes = {
  dataLabelText: PropTypes.string.isRequired,
  dataText: PropTypes.string.isRequired,
}

export default DataLabel

const DataLabelText = styled.p`
  font-size: calc(10px + 1vmin);
`

const DataText = styled.p`
  margin-top: -15px;
  font-size: calc(10px + 2vmin);
`
