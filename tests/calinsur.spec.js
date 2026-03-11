import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost:3000/car-insurance-demo?predictive_id=0&predictive_type=&color=Blue&username=ski105&usersup=&tablename=outbound_renew&tid=1260000399&obruuid=BBD9BD82-0554-4789-B6C3-4848FCD88CB2&callcom=sk&operation_id=D5C8F45A-BA53-4E62-BD10-CAAD1B0743B7-0169&control_host=192.168.0.93&allowSkip=&listName=&lavcid=&fromBasket=&apptype=new&apitype=new&callbackid=&isscpn=n&ulogin=ski105&isautocall=0');
  await page.getByRole('radio').first().check();
  await page.getByRole('combobox').first().selectOption('2024');
  await page.getByRole('combobox').nth(1).selectOption('ISUZU');
  await page.getByRole('combobox').nth(2).selectOption('ELF');
  await page.getByRole('combobox').nth(3).selectOption('NLR / Manual / 3.0 CC / 2 ประตู ');
  await page.getByRole('radio', { name: 'ติด', exact: true }).check();
  await page.getByRole('radio', { name: 'ไม่ให้ นิติบุคคล' }).check();
  await page.getByRole('combobox').nth(4).selectOption('17');
  await page.getByRole('combobox').nth(5).selectOption('16');
  await page.getByRole('spinbutton', { name: 'จำนวนวันที่ใช้รถต่อสัปดาห์ ปีนี้สนใจประกันประเภทไหนคะ' }).click();
  await page.getByRole('spinbutton', { name: 'จำนวนวันที่ใช้รถต่อสัปดาห์ ปีนี้สนใจประกันประเภทไหนคะ' }).fill('5');
  await page.getByRole('button', { name: ' คำนวณเบี้ยประกัน' }).click();
});
