-- 글자형 값으로 PNU 필터링하는 함수
CREATE OR REPLACE FUNCTION get_filtered_pnu_by_values(
  p_table_name TEXT,
  p_column_name TEXT,
  p_selected_values TEXT[]
) RETURNS TABLE (
  pnu TEXT
) AS $$
BEGIN
  RETURN QUERY EXECUTE format(
    'SELECT DISTINCT pnu FROM %I WHERE %I = ANY($1)',
    p_table_name,
    p_column_name
  ) USING p_selected_values;
END;
$$ LANGUAGE plpgsql; 