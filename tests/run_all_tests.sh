#! /bin/bash
generalArrayDir="./general_array_tests/"
generalArrayFiles=$(ls $generalArrayDir)

echo  +===============================+
echo "|TESTING GENERAL ARRAY FUNCTIONS|"
echo  +===============================+

for fileName in $generalArrayFiles
do
  node $generalArrayDir/$fileName
  
  if [ $? != 0 ]
  then
    echo $fileName "failed"
    exit
  fi

  echo $fileName passed
  echo ------------------------------
done

numberArrayDir="./number_array_tests"
numberArrayFiles=$(ls $numberArrayDir)

echo ""
echo  +==============================+
echo "|TESTING NUMBER ARRAY FUNCTIONS|"
echo  +==============================+

for fileName in $numberArrayFiles
do
  node $numberArrayDir/$fileName
  
  if [ $? != 0 ]
  then
    echo $fileName failed
    exit
  fi
  echo $fileName passed
  echo ------------------------------
done

echo ""
echo  +===============+
echo "|ALL TEST PASSED|"
echo  +===============+
