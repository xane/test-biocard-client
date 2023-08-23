import React from 'react';
import {Formik} from 'formik';
import {object, string} from 'yup';
import styled from 'styled-components/native';
import {goBack} from '../service';
import {IResDriver} from '../types';
import {useApiEdit} from '../hooks';
import {Button} from './Button';

const Content = styled.View`
  flex: 1;
  margin: 5px;
  padding-vertical: 10px;
  padding-horizontal: 20px;
  background-color: #fff;
`;

const Form = styled.View`
  padding-vertical: 20px;
`;

const Input = styled.TextInput`
  font-size: 16px;
  color: #000;
  padding-vertical: 5px;
  padding-horizontal: 10px;
  width: 100%;
  margin-vertical: 10px;
  border-width: 1px;
  border-color: #666;
  background-color: #fff;
`;

const Error = styled.Text`
  padding-bottom: 15px;
  font-size: 12px;
  color: red;
`;

interface Props {
  item: IResDriver;
}

const rxUrl =
  /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:[/?#]\S*)?$/i;
const rxDate = /^\d{4}-\d{2}-\d{2}$/;

const validName = (label: string) => string().min(2).max(45).label(label);

const validationSchema = object().shape({
  givenName: validName('Given Name').required(),
  familyName: validName('Family Name').required(),
  url: string().matches(rxUrl, 'URL is bad').label('URL'),
  dateOfBirth: string().matches(rxDate, 'Date is bad').label('Date of Birth'),
  nationality: string().label('Nationality'),
});

export const DriverEdit: React.FC<Props> = ({item}) => {
  const {trigger, error} = useApiEdit(item?.driverId);
  const {givenName, familyName, url, dateOfBirth, nationality} = item;
  const initialValues = {givenName, familyName, url, dateOfBirth, nationality};

  const onSubmit = async (values: {}) => {
    try {
      await trigger(values);
      goBack();
    } catch (e) {
      console.warn('DriverEdit', e);
    }
  };

  return (
    <Content>
      {!!error && <Error>{error}</Error>}
      <Formik
        validateOnMount
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}>
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          isValid,
          errors,
          isSubmitting,
        }) => (
          <Form>
            <Input
              value={values.givenName}
              onBlur={handleBlur('givenName')}
              onChangeText={handleChange('givenName')}
              placeholder="Name"
            />
            {!!errors.givenName && <Error>{errors.givenName}</Error>}
            <Input
              value={values.familyName}
              onBlur={handleBlur('familyName')}
              onChangeText={handleChange('familyName')}
              placeholder="Family"
            />
            {!!errors.familyName && <Error>{errors.familyName}</Error>}
            <Input
              value={values.url}
              onBlur={handleBlur('url')}
              onChangeText={handleChange('url')}
              placeholder="http://example.com/"
            />
            {!!errors.url && <Error>{errors.url}</Error>}
            <Input
              value={values.dateOfBirth}
              onBlur={handleBlur('dateOfBirth')}
              onChangeText={handleChange('dateOfBirth')}
              placeholder="1999-12-31"
            />
            {!!errors.dateOfBirth && <Error>{errors.dateOfBirth}</Error>}
            <Input
              value={values.nationality}
              onBlur={handleBlur('nationality')}
              onChangeText={handleChange('nationality')}
              placeholder="American"
            />
            {!!errors.nationality && <Error>{errors.nationality}</Error>}
            <Button
              text={isSubmitting ? 'Загрузка...' : 'Изменить'}
              disabled={!isValid || isSubmitting}
              // eslint-disable-next-line react-native/no-inline-styles
              style={{
                backgroundColor: !isValid || isSubmitting ? '#999' : '#55f',
                margin: 5,
              }}
              onPress={() => handleSubmit()}
            />
          </Form>
        )}
      </Formik>
    </Content>
  );
};
