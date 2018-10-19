#!/bin/bash
echo "@---General Array Tests---@"

node ./general_array_tests/test_extract_alternate_elements.js
echo "test_extract_alternate_elements passed"

node ./general_array_tests/test_map_lengths.js
echo "test_map_lengths passed"

node ./general_array_tests/test_reverse_array.js
echo "test_reverse_array passed"

node ./general_array_tests/test_check_ascending_order.js
echo "test_check_ascending_order passed"

node ./general_array_tests/test_check_descending_order.js
echo "test_check_descending_order passed"

node ./general_array_tests/test_extract_all_chars.js
echo "test_extract_all_chars passed"

node ./general_array_tests/test_subtract_set.js
echo "test_extract_difference passed"

node ./general_array_tests/test_find_index.js
echo "test_find_index passed"

node ./general_array_tests/test_extract_intersections.js
echo "test_extract_intersections passed"

node ./general_array_tests/test_is_array_subset.js
echo "test_is_array_subset passed"

node ./general_array_tests/test_partition_array.js
echo "test_partition_array passed"

node ./general_array_tests/test_remove_duplicates.js
echo "test_remove_duplicates passed"

node ./general_array_tests/test_rotate_array.js
echo "test_rotate_array passed"

node ./general_array_tests/test_union_arrays.js
echo "test_union_arrays passed"

node ./general_array_tests/test_zip_two_arrays.js
echo "test_zip_two_arrays passed"

echo ""
echo "@---Number Array Tests---@"

node ./number_array_tests/test_calc_average.js
echo "test_calc_average passed"

node ./number_array_tests/test_count_evens.js
echo "test_count_evens passed"

node ./number_array_tests/test_count_numbers_above.js
echo "test_count_numbers_above passed"

node ./number_array_tests/test_count_numbers_below.js
echo "test_count_numbers_below passed"

node ./number_array_tests/test_count_odds.js
echo "test_count_odds passed"

node ./number_array_tests/test_extract_even_elements.js
echo "test_extract_even_elements passed"

node ./number_array_tests/test_extract_odd_elements.js
echo "test_extract_odd_elements passed"

node ./number_array_tests/test_find_greatest_element.js
echo "test_find_greatest_elements passed"

node ./number_array_tests/test_find_lowest_element.js
echo "test_lowest_elements passed"

node ./number_array_tests/test_reverse_fibo.js
echo "test_reverse_fibo passed"

node ./number_array_tests/test_sum_all_elements.js
echo "test_sum_all_elements passed"

echo ""
echo "@---ALL TEST PASSED---@"
