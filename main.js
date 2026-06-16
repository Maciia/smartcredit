function formatPosting(posting) {
  return posting.replace(/(?:Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s+/g, '').trim();
}

function parseAge(ageStr) {
  const yearsMatch = ageStr.match(/(\d+)\s*Years?/);
  const monthsMatch = ageStr.match(/(\d+)\s*Months?/);
  const years = yearsMatch ? parseInt(yearsMatch[1]) : 0;
  const months = monthsMatch ? parseInt(monthsMatch[1]) : 0;
  return years * 12 + months;
}

function extractStatementDay(dateStr) {
  const match = dateStr.match(/(\d+)(st|nd|rd|th)/);
  if (match) {
    const day = parseInt(match[1]);
    const suffix = match[2];
    return (day < 10 ? '0' : '') + day + suffix;
  }
  return dateStr;
}

function parseMoney(str) {
  return parseFloat(str.replace(/[$,]/g, ''));
}

function parseSpots(str) {
  const match = str.match(/(\d+)\s*spot/);
  return match ? parseInt(match[1]) : 1;
}

const rawData = `CITIBANK
2 spots	$24,160	Jan 13th	Jan 20th - Jan 28th	21 Years 5 Months	$740	2	ID: 30659
	USBANK
2 spots	$30,000	Jan 13th	Jan 20th - Jan 28th	6 Years 5 Months	$710	2	
ID: 30766
	CITIBANK
2 spots	$9,400	Jan 13th	Jan 20th - Jan 28th	7 Years 2 Months	$350.50	2	
ID: 30876
	USBANK
1 spot	$18,000	Jan 13th	Jan 20th - Jan 28th	4 Years 5 Months	$378
Original Price: $420	2	
ID: 30870
	PNC
1 spot	$13,000	Jan 13th	Jan 20th - Jan 28th	4 Years 8 Months	$409.95
Original Price: $455.50	3	
ID: 30835
	CAPITAL ONE
2 spots	$11,000	Jan 13th	Jan 20th - Jan 28th	4 Years 7 Months	$414
Original Price: $460	4	
ID: 31041
	CHASE
1 spot	$11,000	Jan 14th	Jan 21st - Jan 29th	22 Years 10 Months	$795	4	
ID: 30793
	CHASE
1 spot	$16,000	Jan 14th	Jan 21st - Jan 29th	7 Years 6 Months	$525	4	
ID: 30793
	CITIBANK
1 spot	$18,500	Jan 14th	Jan 21st - Jan 29th	20 Years 7 Months	$675	2	
ID: 30771
	NFCU
1 spot	$15,800	Jan 14th	Jan 21st - Jan 29th	6 Years 0 Months	$480.25
Original Price: $565	3	
ID: 30842
	CITIBANK
1 spot	$12,000	Jan 14th	Jan 21st - Jan 29th	8 Years 11 Months	$600	2	ID: 30881
	BARCLAYS
1 spot	$12,800	Jan 14th	Jan 21st - Jan 29th	7 Years 9 Months	$337.50
Original Price: $375	2	
ID: 30417
	CITIBANK
1 spot	$24,500	Jan 14th	Jan 21st - Jan 29th	9 Years 5 Months	$570	2	ID: 30966
	BARCLAYS
1 spot	$31,000	Jan 14th	Jan 21st - Jan 29th	6 Years 5 Months	$527
Original Price: $620	2	
ID: 30731
	DISCOVER
1 spot	$3,000	Jan 14th	Jan 21st - Jan 29th	4 Years 2 Months	$250	2	
ID: 30672
	DISCOVER
1 spot	$5,000	Jan 14th	Jan 21st - Jan 29th	4 Years 2 Months	$300	2	
ID: 30672
	BARCLAYS
1 spot	$20,000	Jan 14th	Jan 21st - Jan 29th	2 Years 1 Months	$390	2	
ID: 30746
	CHASE
1 spot	$17,800	Jan 14th	Jan 21st - Jan 29th	14 Years 6 Months	$590.75
Original Price: $695	4	ID: 31045
	CHASE
1 spot	$20,000	Jan 15th	Jan 22nd - Jan 30th	18 Years 7 Months	$890	4	ID: 30845
	BARCLAYS
1 spot	$47,000	Jan 15th	Jan 22nd - Jan 30th	8 Years 2 Months	$807.50
Original Price: $950	2	
ID: 30980
	USBANK
1 spot	$25,000	Jan 15th	Jan 22nd - Jan 30th	7 Years 0 Months	$454.50
Original Price: $505	2	ID: 30795
	CITIBANK
1 spot	$19,400	Jan 15th	Jan 22nd - Jan 30th	7 Years 11 Months	$450.90	2	
ID: 30906
	BARCLAYS
2 spots	$22,000	Jan 16th	Jan 23rd - Jan 31st	5 Years 11 Months	$423
Original Price: $470	2	ID: 30769
	CITIBANK
2 spots	$15,180	Jan 16th	Jan 23rd - Jan 31st	14 Years 5 Months	$550	2	
ID: 30911
	PNC
1 spot	$15,000	Jan 16th	Jan 23rd - Jan 31st	5 Years 4 Months	$446.25
Original Price: $525	3	
ID: 30876
	CHASE
1 spot	$17,600	Jan 16th	Jan 23rd - Jan 31st	5 Years 8 Months	$510	4	ID: 30938
	CHASE
1 spot	$21,500	Jan 16th	Jan 23rd - Jan 31st	5 Years 10 Months	$513
Original Price: $570	4	
ID: 30963
	CHASE
2 spots	$29,900	Jan 16th	Jan 23rd - Jan 31st	13 Years 2 Months	$850	4	
ID: 30873
	BARCLAYS
2 spots	$58,000	Jan 16th	Jan 23rd - Jan 31st	2 Years 11 Months	$877.50
Original Price: $975	2	ID: 30973
	BARCLAYS
2 spots	$48,200	Jan 16th	Jan 23rd - Jan 31st	2 Years 2 Months	$823.50
Original Price: $915	2	
ID: 30303
	CITIBANK
1 spot	$27,000	Jan 17th	Jan 24th - Feb 1st	10 Years 0 Months	$600.20	2	
ID: 30546
	CHASE
1 spot	$20,445	Jan 17th	Jan 24th - Feb 1st	11 Years 11 Months	$655	4	
ID: 30243
	CITIBANK
2 spots	$15,960	Jan 17th	Jan 24th - Feb 1st	7 Years 10 Months	$490.10	2	
ID: 30911
	CHASE
2 spots	$16,500	Jan 17th	Jan 24th - Feb 1st	5 Years 6 Months	$445.50
Original Price: $495	4	ID: 30877
	DISCOVER
1 spot	$1,000	Jan 17th	Jan 24th - Feb 1st	4 Years 2 Months	$240	2	
ID: 30579
	DISCOVER
1 spot	$10,500	Jan 17th	Jan 24th - Feb 1st	28 Years 8 Months	$777.75
Original Price: $915	2	ID: 31056
	BARCLAYS
2 spots	$20,019	Jan 18th	Jan 25th - Feb 2nd	9 Years 9 Months	$482.22
Original Price: $535.80	2	ID: 30948
	CITIBANK
1 spot	$14,000	Jan 18th	Jan 25th - Feb 2nd	5 Years 5 Months	$390.20	2	
ID: 30755
	PNC
1 spot	$19,000	Jan 18th	Jan 25th - Feb 2nd	5 Years 4 Months	$540
Original Price: $600	3	
ID: 30755
	CAPITAL ONE
1 spot	$10,000	Jan 18th	Jan 25th - Feb 2nd	3 Years 4 Months	$405
Original Price: $450	4	
ID: 30978
	CAPITAL ONE
1 spot	$30,000	Jan 18th	Jan 25th - Feb 2nd	3 Years 10 Months	$544
Original Price: $640	4	
ID: 30758
	CHASE
1 spot	$21,600	Jan 19th	Jan 26th - Feb 3rd	13 Years 7 Months	$745	4	ID: 30530
	DISCOVER
1 spot	$26,000	Jan 19th	Jan 26th - Feb 3rd	8 Years 11 Months	$505.75
Original Price: $595	2	
ID: 30448
	CITIBANK
2 spots	$20,000	Jan 19th	Jan 26th - Feb 3rd	9 Years 7 Months	$515	2	ID: 30858
	CITIBANK
1 spot	$10,100	Jan 19th	Jan 26th - Feb 3rd	10 Years 6 Months	$385	2	
ID: 30793
	BARCLAYS
1 spot	$20,000	Jan 19th	Jan 26th - Feb 3rd	6 Years 4 Months	$414
Original Price: $460	2	
ID: 30755
	BARCLAYS
2 spots	$5,019	Jan 19th	Jan 26th - Feb 3rd	8 Years 8 Months	$370	2	
ID: 30964
	CAPITAL ONE
1 spot	$10,000	Jan 19th	Jan 26th - Feb 3rd	3 Years 5 Months	$382.50
Original Price: $450	4	ID: 30974
	CHASE
1 spot	$22,000	Jan 19th	Jan 26th - Feb 3rd	12 Years 2 Months	$603
Original Price: $670	4	
ID: 30861
	CITIBANK
2 spots	$17,700	Jan 19th	Jan 26th - Feb 3rd	3 Years 10 Months	$500	2	
ID: 30942
	CHASE
1 spot	$6,000	Jan 19th	Jan 26th - Feb 3rd	8 Years 0 Months	$432
Original Price: $480	4	
ID: 31041
	CITIBANK
2 spots	$22,800	Jan 20th	Jan 27th - Feb 4th	22 Years 2 Months	$770	2	ID: 30776
	BARCLAYS
1 spot	$14,000	Jan 20th	Jan 27th - Feb 4th	7 Years 5 Months	$360
Original Price: $400	2	ID: 30779
	CITIBANK
1 spot	$14,500	Jan 20th	Jan 27th - Feb 4th	10 Years 6 Months	$450.20	2	
ID: 30807
	CITIBANK
2 spots	$25,500	Jan 20th	Jan 27th - Feb 4th	10 Years 0 Months	$595	2	ID: 30985
	BARCLAYS
1 spot	$31,000	Jan 20th	Jan 27th - Feb 4th	8 Years 5 Months	$562.50
Original Price: $625	2	ID: 30971
	CITIBANK
1 spot	$22,500	Jan 20th	Jan 27th - Feb 4th	11 Years 4 Months	$560	2	
ID: 30873
	CITIBANK
1 spot	$27,000	Jan 20th	Jan 27th - Feb 4th	9 Years 6 Months	$600	2	
ID: 30720
	ELAN
1 spot	$19,500	Jan 20th	Jan 27th - Feb 4th	5 Years 5 Months	$420	2	
ID: 30775
	BARCLAYS
2 spots	$30,000	Jan 21st	Jan 28th - Feb 5th	8 Years 2 Months	$558
Original Price: $620	2	
ID: 30562
	BARCLAYS
1 spot	$25,000	Jan 21st	Jan 28th - Feb 5th	9 Years 9 Months	$526.77
Original Price: $585.30	2	ID: 30565
	BARCLAYS
1 spot	$22,000	Jan 21st	Jan 28th - Feb 5th	11 Years 8 Months	$476
Original Price: $560	2	
ID: 30720
	CAPITAL ONE
1 spot	$1,100	Jan 21st	Jan 28th - Feb 5th	5 Years 0 Months	$365	4	
ID: 30672
	BARCLAYS
1 spot	$20,600	Jan 21st	Jan 28th - Feb 5th	5 Years 0 Months	$450	2	
ID: 31030
	DISCOVER
1 spot	$44,000	Jan 22nd	Jan 29th - Feb 6th	19 Years 8 Months	$1,328.58
Original Price: $1,476.20	2	
ID: 30933
	DISCOVER
1 spot	$13,800	Jan 22nd	Jan 29th - Feb 6th	10 Years 4 Months	$387.09
Original Price: $430.10	2	ID: 30679
	CHASE
1 spot	$20,000	Jan 22nd	Jan 29th - Feb 6th	11 Years 1 Months	$531.25
Original Price: $625	4	
ID: 31032
	CAPITAL ONE
1 spot	$30,000	Jan 22nd	Jan 29th - Feb 6th	3 Years 9 Months	$539.75
Original Price: $635	4	
ID: 30962
	USBANK
1 spot	$11,000	Jan 22nd	Jan 29th - Feb 6th	1 Years 6 Months	$195	2	ID: 31024
	CITIBANK
1 spot	$40,000	Jan 23rd	Jan 30th - Feb 7th	11 Years 1 Months	$910	2	ID: 30940
	ELAN
2 spots	$30,000	Jan 23rd	Jan 30th - Feb 7th	13 Years 5 Months	$705	2	ID: 30533
	ELAN
1 spot	$23,900	Jan 23rd	Jan 30th - Feb 7th	12 Years 7 Months	$590	2	
ID: 30672
	DISCOVER
1 spot	$9,700	Jan 23rd	Jan 30th - Feb 7th	11 Years 11 Months	$395	2	
ID: 30728
	DISCOVER
1 spot	$21,200	Jan 23rd	Jan 30th - Feb 7th	10 Years 4 Months	$820	2	
ID: 30452
	BARCLAYS
1 spot	$25,000	Jan 23rd	Jan 30th - Feb 7th	6 Years 2 Months	$445.50
Original Price: $495	2	
ID: 30746
	DISCOVER
1 spot	$10,500	Jan 23rd	Jan 30th - Feb 7th	26 Years 9 Months	$880	2	ID: 30767
	ELAN
1 spot	$23,400	Jan 23rd	Jan 30th - Feb 7th	11 Years 6 Months	$575	2	ID: 30772
	BARCLAYS
1 spot	$20,500	Jan 23rd	Jan 30th - Feb 7th	7 Years 8 Months	$399.50
Original Price: $470	2	ID: 30925
	BARCLAYS
2 spots	$13,000	Jan 23rd	Jan 30th - Feb 7th	5 Years 2 Months	$375	2	
ID: 30674
	BARCLAYS
2 spots	$21,000	Jan 23rd	Jan 30th - Feb 7th	6 Years 8 Months	$423
Original Price: $470	2	ID: 30666
	CHASE
2 spots	$15,200	Jan 23rd	Jan 30th - Feb 7th	4 Years 3 Months	$505	4	
ID: 30758
	BARCLAYS
3 spots	$10,000	Jan 23rd	Jan 30th - Feb 7th	9 Years 8 Months	$390	2	
ID: 31041
	CITIBANK
1 spot	$11,600	Jan 23rd	Jan 30th - Feb 7th	2 Years 5 Months	$360	2	
ID: 30579
	CAPITAL ONE
1 spot	$30,000	Jan 23rd	Jan 30th - Feb 7th	3 Years 9 Months	$539.75
Original Price: $635	4	
ID: 30962
	BARCLAYS
2 spots	$15,500	Jan 23rd	Jan 30th - Feb 7th	3 Years 8 Months	$375	2	
ID: 31030
	DISCOVER
2 spots	$25,500	Jan 24th	Jan 31st - Feb 8th	9 Years 8 Months	$505.75
Original Price: $595	2	
ID: 30562
	ELAN
1 spot	$25,000	Jan 24th	Jan 31st - Feb 8th	12 Years 0 Months	$544.50
Original Price: $605	2	
ID: 30579
	USBANK
1 spot	$5,000	Jan 24th	Jan 31st - Feb 8th	8 Years 8 Months	$350	2	
ID: 30579
	DISCOVER
1 spot	$3,500	Jan 24th	Jan 31st - Feb 8th	5 Years 4 Months	$295	2	ID: 30671
	CAPITAL ONE
1 spot	$20,100	Jan 24th	Jan 31st - Feb 8th	6 Years 8 Months	$493
Original Price: $580	4	
ID: 30942
	CHASE
1 spot	$36,411	Jan 24th	Jan 31st - Feb 8th	10 Years 6 Months	$765	4	ID: 30899
	PNC
1 spot	$19,000	Jan 24th	Jan 31st - Feb 8th	4 Years 4 Months	$399.67
Original Price: $470.20	3	
ID: 30579
	DISCOVER
1 spot	$15,900	Jan 24th	Jan 31st - Feb 8th	10 Years 7 Months	$480	2	ID: 30856
	BARCLAYS
2 spots	$30,900	Jan 24th	Jan 31st - Feb 8th	8 Years 2 Months	$535.50
Original Price: $630	2	
ID: 30416
	CHASE
2 spots	$24,000	Jan 24th	Jan 31st - Feb 8th	7 Years 1 Months	$548.25
Original Price: $645	4	
ID: 31011
	CHASE
2 spots	$34,800	Jan 24th	Jan 31st - Feb 8th	6 Years 3 Months	$740	4	ID: 31044
	CHASE
1 spot	$21,000	Jan 24th	Jan 31st - Feb 8th	2 Years 5 Months	$690	4	
ID: 31048
	DISCOVER
1 spot	$17,000	Jan 24th	Jan 31st - Feb 8th	13 Years 1 Months	$540	2	ID: 31053
	USBANK
1 spot	$10,000	Jan 25th	Feb 1st - Feb 9th	4 Years 3 Months	$310	2	
ID: 30303
	PNC
1 spot	$15,000	Jan 25th	Feb 1st - Feb 9th	3 Years 10 Months	$374
Original Price: $440	3	
ID: 30873
	CITIBANK
1 spot	$35,000	Jan 26th	Feb 2nd - Feb 10th	10 Years 3 Months	$675	2	ID: 30930
	CHASE
1 spot	$8,500	Jan 26th	Feb 2nd - Feb 10th	12 Years 5 Months	$530	4	ID: 30809
	USBANK
1 spot	$18,000	Jan 27th	Feb 3rd - Feb 11th	9 Years 1 Months	$485.50	2	ID: 31028
	CITIBANK
2 spots	$23,000	Jan 27th	Feb 3rd - Feb 11th	19 Years 10 Months	$750.40	2	ID: 30578
	CHASE
1 spot	$68,000	Jan 27th	Feb 3rd - Feb 11th	9 Years 2 Months	$1,220	4	
ID: 30303
	CITIBANK
2 spots	$12,000	Jan 28th	Feb 4th - Feb 12th	13 Years 2 Months	$455.10	2	
ID: 30515
	ELAN
1 spot	$25,000	Jan 28th	Feb 4th - Feb 12th	7 Years 5 Months	$433.50
Original Price: $510	2	
ID: 30964
	USBANK
1 spot	$19,500	Jan 28th	Feb 4th - Feb 12th	11 Years 1 Months	$505	2	
ID: 30733
	DISCOVER
1 spot	$23,600	Jan 28th	Feb 4th - Feb 12th	9 Years 9 Months	$476
Original Price: $560	2	ID: 31051
	BARCLAYS
2 spots	$3,000	Jan 28th	Feb 4th - Feb 12th	10 Years 9 Months	$355	2	ID: 30717
	BARCLAYS
1 spot	$40,250	Jan 28th	Feb 4th - Feb 12th	7 Years 9 Months	$675.75
Original Price: $795	2	
ID: 30931
	CHASE
2 spots	$27,600	Jan 28th	Feb 4th - Feb 12th	6 Years 5 Months	$648
Original Price: $720	4	
ID: 30766
	ELAN
1 spot	$12,500	Jan 28th	Feb 4th - Feb 12th	10 Years 9 Months	$420	2	
ID: 30775
	BARCLAYS
1 spot	$16,000	Jan 28th	Feb 4th - Feb 12th	7 Years 4 Months	$361.25
Original Price: $425	2	
ID: 30291
	USBANK
1 spot	$30,000	Jan 28th	Feb 4th - Feb 12th	7 Years 6 Months	$558
Original Price: $620	2	
ID: 30931
	USBANK
2 spots	$16,200	Jan 28th	Feb 4th - Feb 12th	10 Years 2 Months	$470	2	ID: 30824
	USBANK
1 spot	$10,000	Jan 28th	Feb 4th - Feb 12th	5 Years 2 Months	$340	2	
ID: 30579
	CHASE
1 spot	$25,000	Jan 28th	Feb 4th - Feb 12th	18 Years 11 Months	$934	4	
ID: 30890
	CITIBANK
2 spots	$19,000	Jan 28th	Feb 4th - Feb 12th	17 Years 1 Months	$670	2	ID: 30902
	BARCLAYS
2 spots	$27,000	Jan 28th	Feb 4th - Feb 12th	9 Years 9 Months	$600.20	2	
ID: 30747
	DISCOVER
1 spot	$20,000	Jan 28th	Feb 4th - Feb 12th	30 Years 11 Months	$1,275	2	ID: 30944
	CITIBANK
2 spots	$12,500	Jan 28th	Feb 4th - Feb 12th	9 Years 5 Months	$410.10	2	
ID: 30991
	ELAN
1 spot	$28,000	Jan 28th	Feb 4th - Feb 12th	14 Years 10 Months	$603
Original Price: $670	2	
ID: 30991
	CHASE
1 spot	$31,200	Jan 28th	Feb 4th - Feb 12th	4 Years 5 Months	$607.50
Original Price: $675	4	ID: 30935
	DISCOVER
1 spot	$10,000	Jan 28th	Feb 4th - Feb 12th	3 Years 10 Months	$350	2	
ID: 30830
	NFCU
1 spot	$37,000	Jan 28th	Feb 4th - Feb 12th	3 Years 9 Months	$629
Original Price: $740	3	ID: 30986
	ELAN
1 spot	$25,000	Jan 28th	Feb 4th - Feb 12th	2 Years 0 Months	$475	2	
ID: 30678
	ELAN
2 spots	$4,000	Jan 28th	Feb 4th - Feb 12th	3 Years 11 Months	$295	2	
ID: 30678
	CAPITAL ONE
1 spot	$12,000	Jan 28th	Feb 4th - Feb 12th	3 Years 4 Months	$427.50
Original Price: $475	4	ID: 31026
	DISCOVER
2 spots	$8,500	Jan 28th	Feb 4th - Feb 12th	3 Years 2 Months	$430	2	ID: n/a
	BARCLAYS
1 spot	$30,000	Feb 1st	Feb 8th - Feb 16th	8 Years 2 Months	$527
Original Price: $620	2	ID: 30847
	CHASE
1 spot	$10,505	Feb 1st	Feb 8th - Feb 16th	8 Years 9 Months	$550	4	
ID: 30727
	BARCLAYS
1 spot	$24,000	Feb 1st	Feb 8th - Feb 16th	10 Years 6 Months	$501.50
Original Price: $590	2	ID: 30475
	CITIBANK
1 spot	$34,400	Feb 1st	Feb 8th - Feb 16th	7 Years 10 Months	$790	2	
ID: 30775
	BARCLAYS
2 spots	$33,000	Feb 1st	Feb 8th - Feb 16th	7 Years 3 Months	$480.25
Original Price: $565	2	ID: 30732
	CITIBANK
2 spots	$34,500	Feb 1st	Feb 8th - Feb 16th	7 Years 10 Months	$590	2	
ID: 31003
	DISCOVER
1 spot	$3,000	Feb 1st	Feb 8th - Feb 16th	5 Years 2 Months	$280	2	
ID: 30672
	TD BANK
1 spot	$1,000	Feb 1st	Feb 8th - Feb 16th	5 Years 1 Months	$245	2	
ID: 30672
	BARCLAYS
1 spot	$33,900	Feb 1st	Feb 8th - Feb 16th	3 Years 9 Months	$510
Original Price: $600	2	
ID: 30830
	CHASE
1 spot	$26,000	Feb 2nd	Feb 9th - Feb 17th	11 Years 2 Months	$634.50
Original Price: $705	4	ID: 30440
	CHASE
1 spot	$15,300	Feb 2nd	Feb 9th - Feb 17th	14 Years 10 Months	$616.50
Original Price: $685	4	ID: 30756
	CHASE
1 spot	$21,500	Feb 2nd	Feb 9th - Feb 17th	19 Years 4 Months	$890.30	4	
ID: 30758
	CHASE
1 spot	$15,500	Feb 2nd	Feb 9th - Feb 17th	17 Years 5 Months	$727	4	
ID: 30758
	CHASE
1 spot	$21,845	Feb 2nd	Feb 9th - Feb 17th	13 Years 5 Months	$745	4	
ID: 30727
	BARCLAYS
2 spots	$3,019	Feb 2nd	Feb 9th - Feb 17th	6 Years 9 Months	$315	2	ID: 30582
	CITIBANK
2 spots	$13,500	Feb 2nd	Feb 9th - Feb 17th	10 Years 9 Months	$430	2	
ID: 30562
	CITIBANK
1 spot	$33,100	Feb 2nd	Feb 9th - Feb 17th	6 Years 8 Months	$555.30	2	ID: 31037
	PNC
1 spot	$12,000	Feb 2nd	Feb 9th - Feb 17th	4 Years 8 Months	$378
Original Price: $420	3	
ID: 30964
	CHASE
1 spot	$15,000	Feb 2nd	Feb 9th - Feb 17th	5 Years 5 Months	$490	4	
ID: 30991
	CHASE
1 spot	$30,000	Feb 2nd	Feb 9th - Feb 17th	14 Years 5 Months	$783
Original Price: $870	4	
ID: 30933
	BARCLAYS
1 spot	$22,500	Feb 2nd	Feb 9th - Feb 17th	5 Years 0 Months	$405
Original Price: $450	2	ID: 31001
	BARCLAYS
2 spots	$16,700	Feb 2nd	Feb 9th - Feb 17th	3 Years 11 Months	$346.50
Original Price: $385	2	
ID: 30733
	DISCOVER
1 spot	$10,500	Feb 2nd	Feb 9th - Feb 17th	6 Years 3 Months	$306
Original Price: $360	2	ID: 31039
	BARCLAYS
2 spots	$10,000	Feb 2nd	Feb 9th - Feb 17th	5 Years 0 Months	$380	2	
ID: 30766
	CITIBANK
2 spots	$11,300	Feb 3rd	Feb 10th - Feb 18th	9 Years 11 Months	$620	2	
ID: 30452
	DISCOVER
1 spot	$20,900	Feb 3rd	Feb 10th - Feb 18th	9 Years 9 Months	$463.25
Original Price: $545	2	ID: 30485
	BARCLAYS
1 spot	$16,000	Feb 3rd	Feb 10th - Feb 18th	9 Years 0 Months	$414.81
Original Price: $460.90	2	
ID: 30291
	DISCOVER
1 spot	$30,900	Feb 3rd	Feb 10th - Feb 18th	8 Years 11 Months	$539.75
Original Price: $635	2	
ID: 31003
	BARCLAYS
1 spot	$12,000	Feb 3rd	Feb 10th - Feb 18th	8 Years 4 Months	$355.50
Original Price: $395	2	
ID: 30991
	DISCOVER
1 spot	$6,500	Feb 3rd	Feb 10th - Feb 18th	4 Years 5 Months	$295	2	
ID: 30870
	BARCLAYS
2 spots	$23,000	Feb 3rd	Feb 10th - Feb 18th	2 Years 3 Months	$375	2	
ID: 30312
	NFCU
1 spot	$4,200	Feb 3rd	Feb 10th - Feb 18th	5 Years 2 Months	$324
Original Price: $360	3	
ID: 30842
	CHASE
2 spots	$38,100	Feb 3rd	Feb 10th - Feb 18th	3 Years 10 Months	$810	4	ID: 31042
	CITIBANK
2 spots	$6,800	Feb 4th	Feb 11th - Feb 19th	9 Years 1 Months	$365	2	
ID: 30515
	CITIBANK
1 spot	$19,500	Feb 4th	Feb 11th - Feb 19th	9 Years 3 Months	$500.90	2	ID: 30959
	CHASE
1 spot	$33,800	Feb 4th	Feb 11th - Feb 19th	13 Years 0 Months	$792
Original Price: $880	4	ID: 30773
	ELAN
1 spot	$25,000	Feb 4th	Feb 11th - Feb 19th	5 Years 0 Months	$490	2	
ID: 30875
	CHASE
2 spots	$15,300	Feb 4th	Feb 11th - Feb 19th	4 Years 8 Months	$505	4	
ID: 30793
	BARCLAYS
2 spots	$25,500	Feb 4th	Feb 11th - Feb 19th	3 Years 2 Months	$427.50
Original Price: $475	2	
ID: 30312
	ELAN
1 spot	$25,000	Feb 4th	Feb 11th - Feb 19th	4 Years 7 Months	$485	2	
ID: 30875
	BARCLAYS
1 spot	$10,000	Feb 4th	Feb 11th - Feb 19th	3 Years 10 Months	$306
Original Price: $340	2	
ID: 30984
	BARCLAYS
1 spot	$39,000	Feb 5th	Feb 12th - Feb 20th	11 Years 0 Months	$629
Original Price: $740	2	ID: 30539
	CITIBANK
1 spot	$21,200	Feb 5th	Feb 12th - Feb 20th	14 Years 5 Months	$610	2	
ID: 30771
	BARCLAYS
2 spots	$3,019	Feb 5th	Feb 12th - Feb 20th	7 Years 2 Months	$288
Original Price: $320	2	
ID: 30861
	BARCLAYS
1 spot	$21,500	Feb 5th	Feb 12th - Feb 20th	8 Years 5 Months	$463.76
Original Price: $545.60	2	ID: 30894
	BARCLAYS
2 spots	$27,500	Feb 5th	Feb 12th - Feb 20th	4 Years 11 Months	$395.25
Original Price: $465	2	
ID: 30223
	CHASE
1 spot	$20,000	Feb 5th	Feb 12th - Feb 20th	18 Years 8 Months	$733.30	4	ID: 30977
	BARCLAYS
2 spots	$10,100	Feb 5th	Feb 12th - Feb 20th	3 Years 8 Months	$279
Original Price: $310	2	
ID: 30747
	CHASE
1 spot	$23,700	Feb 5th	Feb 12th - Feb 20th	7 Years 6 Months	$552.50
Original Price: $650	4	ID: 31015
	BARCLAYS
2 spots	$1,500	Feb 5th	Feb 12th - Feb 20th	1 Years 9 Months	$185	2	
ID: 30978
	BARCLAYS
1 spot	$41,500	Feb 5th	Feb 12th - Feb 20th	2 Years 11 Months	$607.75
Original Price: $715	2	
ID: 30875
	BARCLAYS
2 spots	$10,000	Feb 5th	Feb 12th - Feb 20th	0 Years 11 Months	$195	2	
ID: 30842
	BARCLAYS
1 spot	$16,500	Feb 5th	Feb 12th - Feb 20th	2 Years 6 Months	$380	2	ID: 31055
	BARCLAYS
3 spots	$26,000	Feb 5th	Feb 12th - Feb 20th	5 Years 1 Months	$495	2	ID: 30863
	CITIBANK
2 spots	$16,020	Feb 6th	Feb 13th - Feb 21st	20 Years 11 Months	$645	2	ID: 29
	PNC
1 spot	$15,000	Feb 6th	Feb 13th - Feb 21st	9 Years 0 Months	$522
Original Price: $580	3	
ID: 30363
	CITIBANK
1 spot	$20,500	Feb 6th	Feb 13th - Feb 21st	15 Years 4 Months	$590.10	2	
ID: 30546
	PNC
1 spot	$17,500	Feb 6th	Feb 13th - Feb 21st	6 Years 5 Months	$505.75
Original Price: $595	3	
ID: 30363
	BARCLAYS
1 spot	$20,000	Feb 6th	Feb 13th - Feb 21st	7 Years 5 Months	$418.50
Original Price: $465	2	ID: 30998
	PNC
1 spot	$13,000	Feb 6th	Feb 13th - Feb 21st	10 Years 0 Months	$580	3	
ID: 30243
	BARCLAYS
1 spot	$27,500	Feb 6th	Feb 13th - Feb 21st	4 Years 1 Months	$395.25
Original Price: $465	2	
ID: 30223
	CHASE
1 spot	$14,500	Feb 6th	Feb 13th - Feb 21st	13 Years 7 Months	$567
Original Price: $630	4	ID: 31023
	CHASE
1 spot	$43,931	Feb 6th	Feb 13th - Feb 21st	4 Years 6 Months	$742.50
Original Price: $825	4	
ID: 30835
	DISCOVER
1 spot	$5,800	Feb 6th	Feb 13th - Feb 21st	3 Years 4 Months	$320	2	ID: 31050
	CITIBANK
1 spot	$25,000	Feb 7th	Feb 14th - Feb 22nd	9 Years 11 Months	$585	2	ID: 30926
	BARCLAYS
2 spots	$3,019	Feb 7th	Feb 14th - Feb 22nd	8 Years 8 Months	$333
Original Price: $370	2	ID: 30597
	BARCLAYS
2 spots	$3,019	Feb 7th	Feb 14th - Feb 22nd	7 Years 0 Months	$288
Original Price: $320	2	ID: 30848
	CAPITAL ONE
1 spot	$5,000	Feb 7th	Feb 14th - Feb 22nd	14 Years 5 Months	$468
Original Price: $520	4	ID: 30702
	DISCOVER
1 spot	$8,000	Feb 7th	Feb 14th - Feb 22nd	8 Years 11 Months	$333.63
Original Price: $370.70	2	ID: 30789
	BARCLAYS
2 spots	$25,500	Feb 7th	Feb 14th - Feb 22nd	6 Years 5 Months	$424.80
Original Price: $472	2	
ID: 30448
	DISCOVER
1 spot	$20,700	Feb 7th	Feb 14th - Feb 22nd	12 Years 2 Months	$450.50
Original Price: $530	2	
ID: 30747
	CITIBANK
1 spot	$28,000	Feb 7th	Feb 14th - Feb 22nd	13 Years 11 Months	$660.90	2	ID: 30698
	USBANK
1 spot	$11,500	Feb 7th	Feb 14th - Feb 22nd	5 Years 5 Months	$370	2	
ID: 30890
	BARCLAYS
2 spots	$41,000	Feb 7th	Feb 14th - Feb 22nd	6 Years 6 Months	$645	2	
ID: 30416
	DISCOVER
1 spot	$8,000	Feb 7th	Feb 14th - Feb 22nd	3 Years 2 Months	$270
Original Price: $300	2	
ID: 30870
	BARCLAYS
5 spots	$30,500	Feb 7th	Feb 14th - Feb 22nd	3 Years 8 Months	$510	2	
ID: 30448
	NFCU
1 spot	$24,000	Feb 7th	Feb 14th - Feb 22nd	3 Years 3 Months	$501.50
Original Price: $590	3	
ID: 30731
	DISCOVER
2 spots	$8,000	Feb 7th	Feb 14th - Feb 22nd	1 Years 2 Months	$175.50
Original Price: $195	2	
ID: 31041
	DISCOVER
1 spot	$8,700	Feb 8th	Feb 15th - Feb 23rd	15 Years 3 Months	$396.18
Original Price: $440.20	2	
ID: 30579
	CHASE
1 spot	$41,800	Feb 8th	Feb 15th - Feb 23rd	7 Years 4 Months	$722.50
Original Price: $850	4	
ID: 30980
	DISCOVER
1 spot	$20,100	Feb 8th	Feb 15th - Feb 23rd	10 Years 4 Months	$450.50
Original Price: $530	2	
ID: 30720
	CITIBANK
1 spot	$6,600	Feb 8th	Feb 15th - Feb 23rd	8 Years 11 Months	$360.60	2	
ID: 30793
	CITIBANK
1 spot	$21,000	Feb 8th	Feb 15th - Feb 23rd	8 Years 3 Months	$440.20	2	
ID: 30678
	CITIBANK
2 spots	$22,000	Feb 8th	Feb 15th - Feb 23rd	6 Years 11 Months	$475	2	
ID: 30303
	BARCLAYS
2 spots	$8,000	Feb 8th	Feb 15th - Feb 23rd	6 Years 5 Months	$301.50
Original Price: $335	2	ID: 30782
	BARCLAYS
1 spot	$31,019	Feb 8th	Feb 15th - Feb 23rd	8 Years 11 Months	$569.50
Original Price: $670	2	
ID: 30728
	Alliant CU
1 spot	$21,000	Feb 8th	Feb 15th - Feb 23rd	9 Years 1 Months	$459
Original Price: $540	2	
ID: 30303
	DISCOVER
1 spot	$12,000	Feb 8th	Feb 15th - Feb 23rd	2 Years 11 Months	$364.50
Original Price: $405	2	
ID: 30943
	BARCLAYS
2 spots	$25,000	Feb 8th	Feb 15th - Feb 23rd	2 Years 7 Months	$378
Original Price: $420	2	ID: 31047
	CHASE
1 spot	$25,000	Feb 8th	Feb 15th - Feb 23rd	2 Years 6 Months	$603
Original Price: $670	4	ID: 30919
	BARCLAYS
2 spots	$7,500	Feb 9th	Feb 16th - Feb 24th	6 Years 11 Months	$297
Original Price: $330	2	ID: 30499
	CITIBANK
2 spots	$2,000	Feb 9th	Feb 16th - Feb 24th	7 Years 8 Months	$285	2	
ID: 30674
	CHASE
2 spots	$7,000	Feb 9th	Feb 16th - Feb 24th	11 Years 1 Months	$505	4	
ID: 31032
	CHASE
1 spot	$27,800	Feb 9th	Feb 16th - Feb 24th	11 Years 5 Months	$634.50
Original Price: $705	4	ID: 30826
	CAPITAL ONE
1 spot	$16,000	Feb 9th	Feb 16th - Feb 24th	11 Years 7 Months	$549
Original Price: $610	4	
ID: 30835
	CITIBANK
1 spot	$32,000	Feb 9th	Feb 16th - Feb 24th	19 Years 11 Months	$810	2	
ID: 30870
	DISCOVER
1 spot	$5,000	Feb 9th	Feb 16th - Feb 24th	6 Years 6 Months	$279
Original Price: $310	2	
ID: 30861
	CHASE
1 spot	$28,800	Feb 9th	Feb 16th - Feb 24th	9 Years 5 Months	$625.50
Original Price: $695	4	ID: 31031
	CITIBANK
1 spot	$4,900	Feb 9th	Feb 16th - Feb 24th	4 Years 11 Months	$350	2	
ID: 30579
	DISCOVER
1 spot	$8,000	Feb 9th	Feb 16th - Feb 24th	8 Years 5 Months	$328.50
Original Price: $365	2	
ID: 30807
	CHASE
2 spots	$25,000	Feb 9th	Feb 16th - Feb 24th	9 Years 3 Months	$670	4	
ID: 30906
	BARCLAYS
1 spot	$31,100	Feb 9th	Feb 16th - Feb 24th	5 Years 4 Months	$459.76
Original Price: $540.90	2	ID: 30707
	BARCLAYS
2 spots	$20,000	Feb 9th	Feb 16th - Feb 24th	6 Years 2 Months	$409.50
Original Price: $455	2	
ID: 30943
	DISCOVER
1 spot	$10,000	Feb 9th	Feb 16th - Feb 24th	4 Years 4 Months	$283.50
Original Price: $315	2	
ID: 30303
	BARCLAYS
3 spots	$21,000	Feb 9th	Feb 16th - Feb 24th	2 Years 5 Months	$342
Original Price: $380	2	
ID: 31041
	CITIBANK
2 spots	$19,000	Feb 10th	Feb 17th - Feb 25th	9 Years 0 Months	$495	2	ID: 30889
	CITIBANK
1 spot	$22,000	Feb 10th	Feb 17th - Feb 25th	11 Years 2 Months	$560.60	2	
ID: 30890
	CHASE
1 spot	$41,000	Feb 10th	Feb 17th - Feb 25th	11 Years 1 Months	$873
Original Price: $970	4	ID: 31005
	PNC
1 spot	$12,000	Feb 11th	Feb 18th - Feb 26th	6 Years 3 Months	$425
Original Price: $500	3	
ID: 30672
	BARCLAYS
1 spot	$23,000	Feb 11th	Feb 18th - Feb 26th	6 Years 0 Months	$437.04
Original Price: $485.60	2	
ID: 30906
	CHASE
1 spot	$28,000	Feb 11th	Feb 18th - Feb 26th	7 Years 7 Months	$711
Original Price: $790	4	
ID: 31048
	USBANK
1 spot	$15,000	Feb 11th	Feb 18th - Feb 26th	3 Years 7 Months	$370	2	
ID: 30963
	CITIBANK
1 spot	$7,300	Feb 12th	Feb 19th - Feb 27th	7 Years 6 Months	$335	2	ID: 30982
	DISCOVER
1 spot	$3,500	Feb 12th	Feb 19th - Feb 27th	5 Years 11 Months	$252
Original Price: $280	2	
ID: 30984
	CHASE
2 spots	$18,200	Feb 12th	Feb 19th - Feb 27th	2 Years 7 Months	$450.50
Original Price: $530	4	
ID: 31011
	CAPITAL ONE
2 spots	$9,500	Feb 12th	Feb 19th - Feb 27th	4 Years 7 Months	$369
Original Price: $410	4	
ID: 31041
	CHASE
1 spot	$30,000	Feb 12th	Feb 19th - Feb 27th	8 Years 4 Months	$634.50
Original Price: $705	4	
ID: 30417
	CHASE
1 spot	$6,800	Feb 12th	Feb 19th - Feb 27th	2 Years 1 Months	$460	4	ID: 31018
`;


const lines = rawData.split('\n').filter(line => line.trim());
const parsedRows = [];
let currentLender = '';

for (let i = 0; i < lines.length; i++) {
  const line = lines[i].trim();
  
  if (line && !line.includes('$') && !line.includes('spot') && !line.includes('ID:') && !line.includes('Original Price:') && line.length > 2) {
    if (line.match(/^[A-Z][A-Z\s&]+$/) || line === 'Bank of America' || line === 'Alliant CU' || line === 'NFCU' || line === 'WELLS FARGO') {
      currentLender = line.trim();
      continue;
    }
  }
  
  if (line.includes('spot') && line.includes('$')) {
    let cleanLine = line.split('Original Price:')[0].trim();
    const parts = cleanLine.split('\t').filter(p => p.trim());
    
    if (parts.length >= 6) {
      const spots = parseSpots(parts[0]);
      const limit = parseMoney(parts[1]);
      const statementDay = extractStatementDay(parts[2]);
      const posting = parts[3];
      const ageMonths = parseAge(parts[4]);
      const price = parseMoney(parts[5]);
      
      let lenderToUse = currentLender;
      if (!lenderToUse) {
        for (let j = i - 1; j >= 0; j--) {
          const l = lines[j].trim();
          if (l && !l.includes('$') && !l.includes('spot') && !l.includes('ID:') && !l.includes('Original Price:') && l.length > 2) {
            if (l.match(/^[A-Z][A-Z\s&]+$/) || l === 'Bank of America' || l === 'Alliant CU' || l === 'NFCU' || l === 'WELLS FARGO') {
              lenderToUse = l;
              break;
            }
          }
        }
      }
      if (!lenderToUse) {
        for (let j = i + 1; j < lines.length; j++) {
          const l = lines[j].trim();
          if (l && !l.includes('$') && !l.includes('spot') && !l.includes('ID:') && !l.includes('Original Price:') && l.length > 2) {
            if (l.match(/^[A-Z][A-Z\s&]+$/) || l === 'Bank of America' || l === 'Alliant CU' || l === 'NFCU' || l === 'WELLS FARGO') {
              lenderToUse = l;
              break;
            }
          }
        }
      }

      if (lenderToUse) {
        parsedRows.push({
          price,
          spots,
          lender: lenderToUse,
          limit,
          ageMonths,
          statementDay,
          posting
        });
      }
    }
  }
}

const originalRows = parsedRows;

const rows = originalRows.map(item => ({
  ...item,
  price: (typeof item.price === 'number' && !isNaN(item.price)) ? item.price + 400 : item.price
}));

const tbody=document.querySelector('#linesTable tbody')
const totalCount=document.getElementById('totalCount')
let sortState={key:null,asc:true}

let currentUser = null;
let users = JSON.parse(localStorage.getItem('tradelineUsers')) || [];
let userOrders = JSON.parse(localStorage.getItem('userOrders')) || [];


function formatMoney(v){return '$'+v.toLocaleString(undefined,{minimumFractionDigits:0,maximumFractionDigits:2})}
function formatLimit(v){return '$'+v.toLocaleString()}
function formatAge(months){const y=Math.floor(months/12);return `${y} ${y===1?'year':'years'}`}

function registerUser(userData) {
  if (users.find(user => user.email === userData.email)) {
    return { success: false, message: 'User with this email already exists' };
  }
  
  if (users.find(user => user.phone === userData.phone)) {
    return { success: false, message: 'User with this phone number already exists' };
  }
  
  if (userData.password !== userData.confirmPassword) {
    return { success: false, message: 'Passwords do not match' };
  }
  
  const newUser = {
    id: Date.now(),
    firstName: userData.firstName,
    lastName: userData.lastName,
    phone: userData.phone,
    email: userData.email,
    password: userData.password,
    createdAt: new Date().toISOString()
  };
  
  users.push(newUser);
  localStorage.setItem('tradelineUsers', JSON.stringify(users));
  
  return { success: true, message: 'Registration successful!' };
}

function loginUser(email, phone, password) {
  const user = users.find(u => u.email === email && u.phone === phone && u.password === password);
  
  if (user) {
    currentUser = user;
    localStorage.setItem('currentUser', JSON.stringify(user));
    return { success: true, message: 'Login successful!' };
  } else {
    return { success: false, message: 'Invalid email, phone number or password' };
  }
}

function logoutUser() {
  currentUser = null;
  localStorage.removeItem('currentUser');
  updateAuthUI();
}

function updateAuthUI() {
  const userInfo = document.getElementById('userInfo');
  const authButtons = document.getElementById('authButtons');
  const userName = document.getElementById('userName');
  
  if (currentUser) {
    userInfo.style.display = 'flex';
    authButtons.style.display = 'none';
    userName.textContent = `${currentUser.firstName} ${currentUser.lastName}`;
  } else {
    userInfo.style.display = 'none';
    authButtons.style.display = 'flex';
  }
}

function showNotification(message, isError = false) {
  const notification = document.createElement('div');
  notification.style.cssText = `
    position: fixed; top: 20px; right: 20px; z-index: 1001;
    background: ${isError ? 'var(--danger)' : 'var(--accent)'}; color: white; padding: 12px 20px;
    border-radius: 8px; font-weight: 600; box-shadow: 0 4px 12px rgba(0,0,0,0.15);
  `;
  notification.textContent = message;
  document.body.appendChild(notification);
  
  setTimeout(() => {
    notification.remove();
  }, 3000);
}


function addOrder(orderData) {
  const order = {
    id: Date.now(),
    userId: currentUser.id,
    items: orderData.items,
    total: orderData.total,
    date: new Date().toISOString(),
    status: 'completed'
  };
  userOrders.push(order);
  localStorage.setItem('userOrders', JSON.stringify(userOrders));
}

function loadUserOrders() {
  if (!currentUser) return [];
  return userOrders.filter(order => order.userId === currentUser.id);
}


function showCartNotification() {
  const notification = document.createElement('div');
  notification.style.cssText = `
    position: fixed; top: 20px; right: 20px; z-index: 1001;
    background: var(--accent); color: white; padding: 12px 20px;
    border-radius: 8px; font-weight: 600; box-shadow: 0 4px 12px rgba(0,0,0,0.15);
  `;
  notification.textContent = 'Item added to cart!';
  document.body.appendChild(notification);
  
  setTimeout(() => {
    notification.remove();
  }, 3000);
}

let compareItems = JSON.parse(localStorage.getItem('tradelineCompare')) || [];


function render(data){
  if(data.length===0){
    tbody.innerHTML='<tr><td colspan="7"><div class="empty-state"><div class="empty-state-icon">🔍</div><h3>No results found</h3><p>Try adjusting your filters or search terms</p><button class="btn" onclick="resetAllFilters()">Reset Filters</button></div></td></tr>';
    const mobileCards = document.getElementById('mobileCards');
    if(mobileCards) mobileCards.innerHTML='<div class="empty-state"><div class="empty-state-icon">🔍</div><h3>No results found</h3><p>Try adjusting your filters</p><button class="btn" onclick="resetAllFilters()">Reset Filters</button></div>';
    if(totalCount) totalCount.textContent='0';
    return;
  }
  if (!tbody) return;
  tbody.innerHTML='';
  const mobileCards = document.getElementById('mobileCards');
  if (mobileCards) mobileCards.innerHTML='';
  data.forEach((r, index)=>{
    const itemId = `${r.lender}_${r.limit}_${r.statementDay}`;
    const tr=document.createElement('tr');
    tr.className='fade-in';
    tr.innerHTML=`
      <td>${r.lender}</td>
      <td>${formatLimit(r.limit)}</td>
      <td>${r.statementDay}</td>
      <td>${formatPosting(r.posting)}</td>
      <td>${formatAge(r.ageMonths)}</td>
      <td>${formatMoney(r.price)}</td>`;
    tbody.appendChild(tr);
    if (mobileCards) {
      const card = document.createElement('div');
      card.className = 'mobile-card';
      const itemData = JSON.stringify(r).replace(/"/g, '&quot;');
      card.innerHTML=`
        <div class="mobile-card-header">
          <div class="mobile-card-title">${r.lender}</div>
          <div class="mobile-card-price">${formatMoney(r.price)}</div>
        </div>
        <div class="mobile-card-row">
          <span class="mobile-card-label">Limit:</span>
          <span class="mobile-card-value">${formatLimit(r.limit)}</span>
        </div>
        <div class="mobile-card-row">
          <span class="mobile-card-label">Statement Day:</span>
          <span class="mobile-card-value">${r.statementDay}</span>
        </div>
        <div class="mobile-card-row">
          <span class="mobile-card-label">Posting Day:</span>
          <span class="mobile-card-value">${formatPosting(r.posting)}</span>
        </div>
        <div class="mobile-card-row">
          <span class="mobile-card-label">Account Age:</span>
          <span class="mobile-card-value">${formatAge(r.ageMonths)}</span>
        </div>
      `;
      mobileCards.appendChild(card);
    }
  });
  if (totalCount) totalCount.textContent=data.length;
}

function sortBy(key){if(sortState.key===key){sortState.asc=!sortState.asc}else{sortState={key,asc:true}}
  const sorted=[...filteredRows()].sort((a,b)=>{let va=a[key],vb=b[key];
    if(typeof va==='string'){va=va.toLowerCase();vb=vb.toLowerCase()}
    if(va<vb)return sortState.asc?-1:1
    if(va>vb)return sortState.asc?1:-1
    return 0
  })
  render(sorted)
}

function parseRange(val){if(!val)return null; const trimmed=val.trim();if(trimmed.endsWith('+')){const num=parseInt(trimmed.replace('+','').trim());return{min:num,max:Infinity}} const [min,max]=trimmed.split('-').map(x=>parseInt(x.trim()));return{min,max}}

function inRange(value,range){if(!range)return true;return value>=range.min&&value<=range.max}

function filterData(){const priceEl=document.getElementById('priceSelect')||document.getElementById('mobilePriceSelect')
  const limitEl=document.getElementById('limitSelect')||document.getElementById('mobileLimitSelect')
  const ageEl=document.getElementById('ageSelect')||document.getElementById('mobileAgeSelect')
  const lenderEl=document.getElementById('lenderSelect')||document.getElementById('mobileLenderSelect')
  const statementEl=document.getElementById('statementSelect')||document.getElementById('mobileStatementSelect')
  const postingEl=document.getElementById('postingInput')||document.getElementById('mobilePostingInput')
  const priceR=parseRange((priceEl?.value||'').replace(/[$ ,]/g,'').replace(' +','+'))
  const limitR=parseRange((limitEl?.value||'').replace(/[$ ,]/g,'').replace(' +','+'))
  const ageR=(ageEl?.value||'').replace(' +','+')
  let ageRange=ageR?parseRange(ageR):null
  if(ageRange){
    ageRange={min:ageRange.min*12,max:ageRange.max===Infinity?Infinity:ageRange.max*12}
  }
  const lender=lenderEl?.value||''
  const statement=statementEl?.value||''
  const posting=(postingEl?.value||'').trim().toLowerCase()
  return rows.filter(r=>{
    const ageOk=!ageRange||inRange(r.ageMonths,ageRange)
    const priceOk=!priceR||inRange(r.price,priceR)
    const limitOk=!limitR||inRange(r.limit,limitR)
    const lenderOk=!lender||r.lender===lender
    const statOk=!statement||r.statementDay===statement
    const postOk=!posting||r.posting.toLowerCase().includes(posting)
    return ageOk&&priceOk&&limitOk&&lenderOk&&statOk&&postOk
  })
}

function filteredRows(){return filterData()}

document.querySelectorAll('th.sortable').forEach(th=>{th.addEventListener('click',()=>sortBy(th.dataset.key))})

function syncFilters(sourceId, targetId) {
  const source = document.getElementById(sourceId);
  const target = document.getElementById(targetId);
  if (source && target) {
    target.value = source.value;
  }
}


const filterSync = (desktopId, mobileId) => {
  const desktop = document.getElementById(desktopId);
  const mobile = document.getElementById(mobileId);
  if (desktop) {
    desktop.addEventListener('change', () => {
      if (mobile) mobile.value = desktop.value;
      render(filterData());
      saveFilterState();
    });
  }
  if (mobile) {
    mobile.addEventListener('change', () => {
      if (desktop) desktop.value = mobile.value;
      render(filterData());
      saveFilterState();
    });
  }
};

filterSync('lenderSelect', 'mobileLenderSelect');
filterSync('limitSelect', 'mobileLimitSelect');
filterSync('statementSelect', 'mobileStatementSelect');
filterSync('postingInput', 'mobilePostingInput');
filterSync('ageSelect', 'mobileAgeSelect');
filterSync('priceSelect', 'mobilePriceSelect');

document.getElementById('postingInput')?.addEventListener('input', () => {
  const mobile = document.getElementById('mobilePostingInput');
  if (mobile) mobile.value = document.getElementById('postingInput').value;
  render(filterData());
  saveFilterState();
});

document.getElementById('mobilePostingInput')?.addEventListener('input', () => {
  const desktop = document.getElementById('postingInput');
  if (desktop) desktop.value = document.getElementById('mobilePostingInput').value;
  render(filterData());
  saveFilterState();
});

function updateCompareBar(){
  const compareBar = document.getElementById('compareBar');
  const compareItemsEl = document.getElementById('compareItems');
  if(!compareBar||!compareItemsEl) return;
  if(compareItems.length===0){
    compareBar.classList.remove('active');
    return;
  }
  compareBar.classList.add('active');
  compareItemsEl.innerHTML = compareItems.map((item,index)=>`
    <div class="compare-item">
      <div class="compare-item-header">
        <div class="compare-item-title">${item.lender}</div>
        <button class="compare-item-remove" onclick="removeFromCompare(${index})">×</button>
      </div>
      <div style="font-size:12px;color:var(--muted);">${formatLimit(item.limit)} • ${item.statementDay}</div>
      <div style="font-weight:600;color:var(--accent-600);margin-top:4px;">${formatMoney(item.price)}</div>
    </div>
  `).join('');
}

function removeFromCompare(index){
  compareItems.splice(index,1);
  localStorage.setItem('tradelineCompare',JSON.stringify(compareItems));
  updateCompareBar();
  render(filterData());
}

function showCompareModal(){
  if(compareItems.length===0){
    showNotification('No items to compare',true);
    return;
  }
  const compareTable = document.getElementById('compareTable');
  const headers = ['Lender','Limit','Statement Day','Posting Day','Account Age','Price'];
  let html = '<table style="width:100%;border-collapse:collapse;"><thead><tr>';
  headers.forEach(h=>html+=`<th style="padding:12px;border:1px solid var(--border);background:var(--accent-50);">${h}</th>`);
  html+='</tr></thead><tbody>';
  compareItems.forEach(item=>{
    html+=`<tr><td style="padding:12px;border:1px solid var(--border);">${item.lender}</td>`;
    html+=`<td style="padding:12px;border:1px solid var(--border);">${formatLimit(item.limit)}</td>`;
    html+=`<td style="padding:12px;border:1px solid var(--border);">${item.statementDay}</td>`;
    html+=`<td style="padding:12px;border:1px solid var(--border);">${formatPosting(item.posting)}</td>`;
    html+=`<td style="padding:12px;border:1px solid var(--border);">${formatAge(item.ageMonths)}</td>`;
    html+=`<td style="padding:12px;border:1px solid var(--border);">${formatMoney(item.price)}</td></tr>`;
  });
  html+='</tbody></table>';
  compareTable.innerHTML = html;
  document.getElementById('compareModal').style.display='block';
}


function saveFilterState(){
  const state = {
    lender:document.getElementById('lenderSelect')?.value||'',
    limit:document.getElementById('limitSelect')?.value||'',
    statement:document.getElementById('statementSelect')?.value||'',
    age:document.getElementById('ageSelect')?.value||'',
    price:document.getElementById('priceSelect')?.value||'',
    posting:document.getElementById('postingInput')?.value||''
  };
  localStorage.setItem('tradelineFilters',JSON.stringify(state));
}

function loadFilterState(){
  const saved = localStorage.getItem('tradelineFilters');
  if(!saved) return;
  const state = JSON.parse(saved);
  if(state.lender) document.getElementById('lenderSelect').value = state.lender;
  if(state.limit) document.getElementById('limitSelect').value = state.limit;
  if(state.statement) document.getElementById('statementSelect').value = state.statement;
  if(state.age) document.getElementById('ageSelect').value = state.age;
  if(state.price) document.getElementById('priceSelect').value = state.price;
  if(state.posting) document.getElementById('postingInput').value = state.posting;
  syncFilters('lenderSelect','mobileLenderSelect');
  syncFilters('limitSelect','mobileLimitSelect');
  syncFilters('statementSelect','mobileStatementSelect');
  syncFilters('ageSelect','mobileAgeSelect');
  syncFilters('priceSelect','mobilePriceSelect');
  syncFilters('postingInput','mobilePostingInput');
  render(filterData());
}

function showLoading(){
  document.getElementById('loadingOverlay').classList.add('active');
}

function hideLoading(){
  document.getElementById('loadingOverlay').classList.remove('active');
}

document.getElementById('compareNow').addEventListener('click',showCompareModal);
document.getElementById('clearCompare').addEventListener('click',()=>{
  compareItems=[];
  localStorage.setItem('tradelineCompare',JSON.stringify(compareItems));
  updateCompareBar();
  render(filterData());
});
document.getElementById('closeCompare').addEventListener('click',()=>{
  document.getElementById('compareModal').style.display='none';
});

const filterElements = ['lenderSelect','limitSelect','statementSelect','ageSelect','priceSelect','postingInput','mobileLenderSelect','mobileLimitSelect','mobileStatementSelect','mobileAgeSelect','mobilePriceSelect','mobilePostingInput'];
filterElements.forEach(id=>{
  const el = document.getElementById(id);
  if(el) el.addEventListener('change',()=>{
    saveFilterState();
  });
});

const savedUser = localStorage.getItem('currentUser');
if (savedUser) {
  currentUser = JSON.parse(savedUser);
  updateAuthUI();
}

loadFilterState();
updateCompareBar();
render(rows);



(function(){
  const scrollToTopBtn = document.getElementById('scrollToTop');
  if(!scrollToTopBtn) return;
  
  function toggleScrollButton(){
    if(window.pageYOffset>300){
      scrollToTopBtn.classList.add('visible');
    }else{
      scrollToTopBtn.classList.remove('visible');
    }
  }
  
  window.addEventListener('scroll',toggleScrollButton);
  scrollToTopBtn.addEventListener('click',()=>{
    window.scrollTo({top:0,behavior:'smooth'});
  });
  
  toggleScrollButton();
})();

